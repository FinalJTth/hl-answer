"use client"

import { ReactElement } from "react";
import MainContainer from "../../../components/shared/MainContainer";
import MultilingualProduct from "../../../components/answer/backend/MultilingualProductSchema";

export default function Backend(): ReactElement {
    return (
        <MainContainer>
            <div className="p-10">
                {/* Question 1 */}
                <h1 className="mb-4 text-5xl font-bold leading-none tracking-tight dark:text-white">Question 1</h1>
                <span className="text-lg">
                    Assuming the system currently has three microservices: Customer API, Master Data API,
                    and Transaction Data API, there is a new feature that requires data from all three
                    microservices to be displayed in near real-time. The current technology stack includes
                    REST APIs and an RDBMS database. How would you design a new API for this feature ?
                </span>
                <h1 className="mb-4 mt-4 text-3xl font-bold leading-none tracking-tight dark:text-white">Answer</h1>
                <span className="text-lg">
                    We can put a Gateway API server to congregate net traffic and end
                    point management into one, making them easier to maintain from our new feature side as
                    you need to send request to only one endpoint instead of three.
                    <br /><br />
                    We also need an Aggregator API that act like its name, aggregate result from 3 different
                    microservies and send them back to the customer through our Gateway API. This ensure that
                    our new feature only need to call our service only once to get the result needed.
                </span>

                {/* Question 2 */}
                <h1 className="mb-4 mt-10 text-5xl font-bold leading-none tracking-tight dark:text-white">Question 2</h1>
                <span className="text-lg">
                    Assuming the team has started planning a new project, the project manager asks you for a
                    performance test strategy plan for this release. How would you recommend proceeding to
                    the project manager ? 
                </span>
                <h1 className="mb-4 mt-4 text-3xl font-bold leading-none tracking-tight dark:text-white">Answer</h1>
                <span className="text-lg">
                    1. First and foremost, we need to find the scope of usage for our new project. Which part of
                    our project will be potentially used most by the customer and speculate the area that will be most
                    bottlenecking
                    <br /><br />
                    2. We need to know which metrics to test on, such as CPU usage, memory usage and traffic. In this case
                    we are talking about a full-stack web application with microservices, the most likely bottleneck
                    will be on the network traffic (My past experience with course registration in the University).
                    Hence in network traffic context, we must setup a stress test on peak user load (In general,
                    we should set a test on metric that matter for us) 
                    <br />
                    For React.JS, sometime the react component may take forever to load, so we can use loading time in
                    second as the metric.
                    <br /><br />
                    3. Replicate real world situation as best as possible when we're setting up and doing the test.
                    <br /><br />
                    4. Once our testing environment and goal are set, recommend the project manager for a recurrent
                    meetup to talk about the performance result so that we can revaluate and change our code and
                    resources as needed.
                </span>

                {/* Question 3 */}
                <h1 className="mb-4 mt-10 text-5xl font-bold leading-none tracking-tight dark:text-white">Question 3</h1>
                <span className="text-lg">
                    Design and develop two APIs using NestJS and Postgres with the following 
                    specifications: 
                    <br /><br />
                    1. Create a Multilingual Product API: Develop an API that allows for the creation 
                    of products, each with attributes for name and description that support multiple 
                    languages. 
                    <br /><br />
                    2. Multilingual Product Search API: Implement an API that enables searching for 
                    products by name in any language and returns results in a paginated format.
                </span>
                <h1 className="mb-4 mt-4 text-3xl font-bold leading-none tracking-tight dark:text-white">Answer</h1>
                <span className="text-lg">
                    1. Validation <br />
                    Since Nest.JS has a built in <code>"ValidationPipe"</code> that automatically validate any incoming
                    requests using NodeJS <code>"class-validator"</code> and <code>"class-transformer"</code> By attaching validation
                    decorator to a transient Data-Transfer-Object classes, we can use those classes to tell ValidationPipe
                    how to validate our class. The validation happens before the data comes into any NestJS controller
                    that use those classes for its function input.
                    <br /><br />
                    This approach extremely simplify the validation logic since we do not need to write the logical
                    at all, but only decorator. And of course this would just works for both APIs if we use decorators
                    on both of them.
                    <br /><br />
                    2. Database Design
                    <div className="mt-8 mb-6 flex justify-center">
                        <MultilingualProduct />
                    </div>
                    This schema should show you that Product and ProductDetailTranslations has <code>many-to-one</code>.
                    By seperating data that needed to be localize from other product data column, we can ensure that
                    there won't be data duplication for column that doesn't need to be localized. And data that
                    need to be localized into several languages can be mapped back to Product when needed.
                    <br /><br />
                    In a real world situation, I would assume that all text for web application should be
                    localized and stored seperately like this, especially for an application intended to be used
                    in several languages. A quick research also told me that this is probably the simplest solution
                    that works well, not to mention that it is quite simple to do search query API.
                    <br /><br />
                    I use Prisma as an ORM tool to do code-first approach in creating database.
                    <br /><br />
                    3. Testing Strategy
                    My testing strategy often involve around <code>integration test</code> in general and fore go unit test 
                    whenever I can. In my opinion, at least for a small project like this, it is often much faster
                    to build it around integration test. I've worked a Jest Product Service testing that use real
                    empty database instead of creating a mock function. The schema for the database is very small
                    and easy to manage, so creating a small unit test with mock function is meaningless here. The
                    contrary can be said for a very big project where it needs a lot of unit test to verify labyrinth
                    of code logic.
                    <br /><br />
                    For end-end testing, I often use frontend application coupling with backend one but not often
                    did I do automate testing for such. But in this context, It's probably be best to do Jest Testing
                    on our React.JS framework.
                </span>
                <h1 className="mb-4 mt-8 text-3xl font-bold leading-none tracking-tight dark:text-white">**Summary**</h1>
                <span className="text-lg">
                        To check for my answer on question 3<br />
                        Validator : ./src/product/dto<br />
                        Database : ./prisma/schema.prisma<br />
                        Testing Strategy : ./src/product/[controller, service]/product.[controller, service].spec.ts<br />
                </span>
            </div>
        </MainContainer >
    )
}