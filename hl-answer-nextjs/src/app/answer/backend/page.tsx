import { ReactElement } from "react";
import MainContainer from "../../../components/shared/MainContainer";

export default function Backend(): ReactElement {
    return (
        <MainContainer>
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
                <br /><br />
                3. Replicate real world situation as best as possible on the stress test.
                <br /><br />
                4. Once our testing environment and goal are set, recommend the project manager for a recurrent
                meetup to talk about the performance result so that we can revaluate and change our code and
                resources as needed. Automate testing is also recommended.
            </span>
        </MainContainer >
    )
}