import { useState, useEffect } from 'react';

export const useFilterCategories = () => {
  const [filtersCategories, setFiltersCategories] = useState([
    { name: 'All', count: 0 },
    { name: 'Accessories', count: 0 },
    { name: 'Featured', count: 0 },
    { name: 'Unisex', count: 0 },
  ]);

  useEffect(() => {
    const fetchCounts = async () => {
      const accessoriesCount = await fetch('https://mock.shop/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            query {
              products(first: 50, query: "tag:Accessories") {
                edges {
                  node {
                    id
                  }
                }
              }
            }
          `,
        }),
      })
        .then(res => res.json())
        .then(data => data?.data?.products?.edges?.length || 0);

      const featuredCount = await fetch('https://mock.shop/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            query {
              collectionByHandle(handle: "featured") {
                products(first: 50) {
                  edges {
                    node {
                      id
                    }
                  }
                }
              }
            }
          `,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log("Featured Data:", data);
          return data?.data?.collectionByHandle?.products?.edges?.length || 0;
        });

      const unisexCount = await fetch('https://mock.shop/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            query {
              products(first: 50, query: "tag:Unisex") {
                edges {
                  node {
                    id
                  }
                }
              }
            }
          `,
        }),
      })
        .then(res => res.json())
        .then(data => data?.data?.products?.edges?.length || 0);

      setFiltersCategories([
        { name: 'All', count: accessoriesCount + featuredCount + unisexCount },
        { name: 'Accessories', count: accessoriesCount },
        { name: 'Featured', count: featuredCount },
        { name: 'Unisex', count: unisexCount },
      ]);
    };

    fetchCounts();
  }, []);

  return filtersCategories;
};
