const API_URL = process.env.WORDPRESS_API_URL || 'http://localhost/wptech_developer_portfolio/backend/graphql';

async function fetchAPI(query: string, { variables }: { variables?: any } = {}) {
  const headers = { 'Content-Type': 'application/json' };

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 }, // ISR
    });

    const json = await res.json();
    if (json.errors) {
      console.error(JSON.stringify(json.errors, null, 2));
      throw new Error('Failed to fetch API');
    }
    return json.data;
  } catch (e) {
    console.error("API Fetch Failed:", e);
    throw new Error('Failed to fetch API');
  }
}

export async function getAllPosts() {
  const data = await fetchAPI(`
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          slug
          title
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `);

  return data?.posts?.nodes;
}

export async function getPostBySlug(slug: string) {
  const data = await fetchAPI(`
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        title
        excerpt
        content
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `, {
    variables: {
      id: slug,
      idType: 'SLUG'
    }
  });

  return data?.post;
}

export async function getAllServices() {
  const query = `
    query GetAllServices {
      services(first: 20) {
        nodes {
          title
          excerpt
          content
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  try {
    const data = await fetchAPI(query);
    return data?.services?.nodes || [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function getAllProjects() {
  const query = `
    query GetAllProjects {
      projects(first: 20) {
        nodes {
          title
          excerpt
          content
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          projectCategories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const data = await fetchAPI(query);
    return data?.projects?.nodes || [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getPageBySlug(slug: string) {
  const data = await fetchAPI(`
    query PageBySlug($id: ID!, $idType: PageIdType!) {
      page(id: $id, idType: $idType) {
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `, {
    variables: {
      id: slug,
      idType: 'URI'
    }
  });

  return data?.page;
}
