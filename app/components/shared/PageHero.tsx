import { FunctionComponent, ReactElement } from "react";

interface PageHeroProps {
    title: string;
}

const PageHero: FunctionComponent<PageHeroProps> = ({ title }: PageHeroProps): ReactElement => {
    return (
        <div className="flex flex-col items-center justify-center h-52 w-full mt-16 bg-[url(/images/sub_page_hero.jpg)] bg-fixedp bg-center bg-no-repeat bg-cover">
            <h1 className="text-4xl text-center font-extrabold text-primary-dark">{title}</h1>
        </div>
    );
}

export default PageHero;