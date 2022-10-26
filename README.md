This is the note of following course

- Udemy
- React, Nextjs
- Maximilian Schwarzmuller

================================================================

# File-based routing

# useRouter

```javascript
import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter(); // to expose the router and its attributes

  console.log(router.pathname);
  console.log(router.query);

  return <div>The PortfolioProjectPage</div>;
}

export default PortfolioProjectPage;
```

- here the structure is `pages/portfolio/[projectid].js`
- Then if we type [http://localhost:3000/portfolio/something](http://localhost:3000/portfolio/something)
  - it will show these, means
    - something as we input into the url has already been fetched as `projectid`
      ![Screenshot 2022-10-26 at 16.26.37.png](https://user-images.githubusercontent.com/40550117/198136352-786d9147-efc6-4f71-b805-eb6deb871872.png)
  - so it means we could in this component
    - fetch the data with an id of `router.query.projectid`
    - and send a `request` to some BE server

# […slug].js

- here `slug` could be anything / string
- it will cover all the
- here the structure is `pages/blog/[...slug].js`

  ```jsx
  import { useRouter } from "next/router";

  function BlogPostsPage() {
    const router = useRouter();
    console.log(router.query);
    return <div>The blog posts page</div>;
  }
  export default BlogPostsPage;
  ```

  ![Screenshot 2022-10-26 at 17.14.54.png](https://user-images.githubusercontent.com/40550117/198136410-fe68156f-4e83-4854-9ba2-cc92aed1c1b2.png)

  - so it has an array instead of just a string,
  - contains `asdwf` and `2` which compose the url

# Navigating Between Pages

- Old way
  ```jsx
  <li>
    <a href="/portfolio">Portfolio</a>
  </li>
  ```
  ![Screenshot 2022-10-26 at 17.22.44.png](https://user-images.githubusercontent.com/40550117/198136458-0f67202f-1cd9-4c40-8d52-b8408efb08ae.png)
  - This is working but it sends a `new HTTP request` to load this page, which means if we have any application `state`, it would be lost when `new request` is sending
  # <Link>
- so we have this `Link` from `Next` to avoid such situation
  ```jsx
  import Link from "next/link";
  ===========
  <ul>
    <li>
      <Link href="/portfolio">PortfolioPage</Link>
    </li>
  </ul>
  ```
  - it will `pre-fetch` all data as soon as our mouse is hovering on the link
  - `replace` will make this navigation not going to a new page, but just replace current page
- check how the `dynamic routing` works
  ![Screenshot 2022-10-26 at 22.02.59.png](https://user-images.githubusercontent.com/40550117/198136503-f0d0acf6-1163-4f9a-8798-d55be0eab00e.png)
  so we could have such code
  ```jsx
  <ul>
    <li>
      <Link href="/clients/max">Max</Link>
    </li>
    <li>
      <Link href="/clients/apple">Apple</Link>
    </li>
  </ul>
  ```
  and when the data is in array in normal cases
  ```jsx
  function ClientsPage() {
    const clients = [
      { id: "max", name: "maximiliam" },
      { id: "min", name: "minimilian" },
    ];
    return (
      <div>
        This is Client Page
        <ul>
          {clients.map((client) => {
            return (
              <li key={client.id}>
                <Link href={`/clients/${client.id}`}>{client.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  ```
- but sometimes the `href={`/clients/${client.id}``could be too long and complicated. so Nextjs have a method to use`object`instead of`string`
  ```jsx
  href = {{
  	pathname: '/clients/[id]',
  	query: {id: client.id}
  }}
  ```

# router.push() / router.replace() - navigate programmatically

```jsx
function ClientProjectsPage() {
  const router = useRouter();
  function loadProjectHandler() {
    //... load data
    router.push("/clients/max/projecta"); // to navigate to a new page
  }
  return (
    <div>
      The Projects of a client
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
```

- likewise, we could also use `object` instead of `string` here

  ```jsx
  router.push("/clients/max/projecta"); // to navigate to a new page

  router.push({
    pathname: "/clients/[id]/[clientprojectid]",
    query: { id: "max", clientprojectid: "projecta" },
  });
  ```

# 404 page

- under `pages` folder
- name has to be `404.js`
- normal react component
- then next.js will find it automatically

![Screenshot 2022-10-26 at 22.45.32.png](https://user-images.githubusercontent.com/40550117/198136559-3e4cdb71-099e-48ed-814d-da1afbd6a565.png)
