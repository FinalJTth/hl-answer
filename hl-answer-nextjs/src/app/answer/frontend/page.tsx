import { ReactElement } from "react";
import MainContainer from "../../../components/shared/MainContainer";

export default function Frontend(): ReactElement {
    return (
        <MainContainer>
            <div className="p-10">
            <h1 className="mb-4 text-5xl font-bold leading-none tracking-tight dark:text-white">Question 1</h1>
                <span className="text-lg">
                    What is <code>"useCallback"</code> used for ?
                </span>
                <h1 className="mb-4 mt-4 text-3xl font-bold leading-none tracking-tight dark:text-white">Answer</h1>
                <span className="text-lg">
                    <code>"useCallback"</code> is used specifically to cache a function between React re-rendering cycle.
                    if the dependency variables hasn't changed (the second argument for useCallback) Usually useCallback
                    is often used together with <code>memo(function ReactComponent(props) &#123;...&#125;)</code>
                    What <code>memo</code> will do to ReactComponent is that it will prevent that react component from
                    being re-rendered if their parent re-render. But for example, react also re-render that component
                    too if the <code>props</code> that pass through has changed in reference. Due to how javascript works,
                    if you were to pass a function as props by using any function declaration, including Lamba, it will
                    be counted as new props and your child component with that props will re-render.
                    <br /><br />
                    And this is where <code>"useCallback"</code> come in handy. It can store a function between
                    re-rendering cycle, until dependencies change, so that if you pass it as props, it won't force
                    your child component to re-render.
                    <br /><br />
                    That being said, this is only helpful if your child component takes pretty long time to re-render.
                </span>

                {/* Question 2 */}
                <h1 className="mb-4 mt-10 text-5xl font-bold leading-none tracking-tight dark:text-white">Question 2</h1>
                <span className="text-lg">
                    Write a unit test for the UserProfile React component using Jest and React Testing Library. 
                </span>
                <h1 className="mb-4 mt-4 text-3xl font-bold leading-none tracking-tight dark:text-white">Answer</h1>
                <span className="text-lg">
                    The file should be in ./src/app/user-profile/UserProfile.test.tsx
                </span>
            </div>
        </MainContainer>
    )
}