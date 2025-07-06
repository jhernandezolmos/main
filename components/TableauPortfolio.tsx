import React, { useEffect, useRef } from 'react';

const TableauPortfolio: React.FC = () => {
    const vizContainerRef = useRef<HTMLDivElement>(null);
    const isInitialized = useRef(false);

    useEffect(() => {
        if (isInitialized.current || !vizContainerRef.current) {
            return;
        }

        const divElement = vizContainerRef.current;
        const vizElement = divElement.getElementsByTagName('object')[0];

        const resizeViz = () => {
            if (!divElement || !vizElement) return;

            // A more responsive approach than the original script's fixed pixel values
            vizElement.style.width = '100%';

            if (divElement.offsetWidth > 800) {
                vizElement.style.height = '827px';
            } else if (divElement.offsetWidth > 500) {
                vizElement.style.height = '827px';
            } else {
                vizElement.style.height = '1100px';
            }
        };

        // This should be done before the script loads to have an initial size.
        resizeViz();

        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        scriptElement.async = true;
        // The original script inserts the new script before the viz object.
        vizElement.parentNode?.insertBefore(scriptElement, vizElement);

        window.addEventListener('resize', resizeViz);

        isInitialized.current = true;

        return () => {
            window.removeEventListener('resize', resizeViz);
        };
    }, []);

    return (
        <div className="mt-6 w-full max-w-[1000px] mx-auto overflow-x-auto">
             <div 
                className='tableauPlaceholder' 
                ref={vizContainerRef} 
                id='viz1751825944436' 
                style={{ position: 'relative' }}
            >
                <noscript>
                    <a href='#'>
                        <img 
                            alt='Padel Stats Dashboard' 
                            src='https://public.tableau.com/static/images/Pa/PadelStats/Dashboard1/1_rss.png' 
                            style={{ border: 'none' }} 
                        />
                    </a>
                </noscript>
                <object className='tableauViz' style={{ display: 'none' }}>
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='PadelStats/Dashboard1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param name='static_image' value='https://public.tableau.com/static/images/Pa/PadelStats/Dashboard1/1.png' />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                    <param name='filter' value='publish=yes' />
                </object>
            </div>
        </div>
    );
};

export default TableauPortfolio;