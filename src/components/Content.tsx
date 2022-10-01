import React from 'react';

class Content extends React.Component {
    render = (): React.ReactNode => (
        <section className="tw-flex tw-flex-col tw-font-poppins tw-font-black tw-m-2 tw-w-full tw-justify-center tw-items-center ">
            <div className="tw-flex tw-bg-primary tw-text-[26px] tw-h-16 tw-justify-center tw-flex-col tw-items-center tw-w-3/4 tw-rounded-md tw-mb-6">
                <h1 className="tw-w-fit">AP CS Principles</h1>
            </div>
            <div className="tw-my-2 tw-flex tw-bg-primary tw-bg-opacity-40 tw-text-[26px] tw-h-16 tw-justify-center tw-flex-col tw-items-center tw-w-2/4 tw-rounded-md">
                <h1 className="tw-w-fit">Module - X</h1>
            </div>
        </section>
    );
}

export default Content;
