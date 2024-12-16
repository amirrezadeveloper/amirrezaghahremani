import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Amirreza Ghahremani
      </h1>
      <p className="mb-4">
        {`Skilled in ASP.NET Core and MVC for building web applications.
Experience with Microservices using gRPC, GraphQL, and REST APIs.
Proficient in Entity Framework Core and SQL Server for database management.
Experienced with Security using JWT, OAuth, and ASP.NET Identity.
Knowledge of CQRS and Clean Architecture for building maintainable systems.
Experienced in JavaScript and Angular for front-end development.
Familiar with Git and DevOps for version control and CI/CD.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
