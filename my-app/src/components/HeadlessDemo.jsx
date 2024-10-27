import React, { useState, useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Avatar } from 'primereact/avatar';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';

export default function HeadlessDemo() {
    const [visible, setVisible] = useState(false);
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <div className="min-h-screen flex relative lg:static surface-ground">
                    <div className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: '280px' }}>
                        <div className="flex flex-column h-full">
                            <div className="overflow-y-auto">
                                <ul className="list-none p-3 m-0">
                                    <li>
                                        <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                            <div ref={btnRef1} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                <span className="font-medium">FAVORITES</span>
                                                <i className="pi pi-chevron-down"></i>
                                                <Ripple />
                                            </div>
                                        </StyleClass>
                                        <ul className="list-none p-0 m-0 overflow-hidden">
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                    <i className="pi pi-home mr-2"></i>
                                                    <span className="font-medium">Dashboard</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            {/* More items */}
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="list-none p-3 m-0">
                                    <li>
                                        <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                            <div ref={btnRef4} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                <span className="font-medium">APPLICATION</span>
                                                <i className="pi pi-chevron-down"></i>
                                                <Ripple />
                                            </div>
                                        </StyleClass>
                                        <ul className="list-none p-0 m-0 overflow-hidden">
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                    <i className="pi pi-folder mr-2"></i>
                                                    <span className="font-medium">Projects</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            {/* More items */}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-auto">
                                <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                                <a className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                                    <span className="font-bold">Amy Elsner</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
}
