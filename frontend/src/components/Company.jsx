import React from "react";
const Company = () => {
    return (
        <div className="2xl:px-20 md:px-10 2xl:mx-auto 2xl:container">
            <div className="md:py-12 py-8 px-4">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="lg:text-3xl md:text-2xl text-xl font-bold leading-10 text-gray-800">Our Trusted & Aimed Companies</h1>
                    <p className="text-base leading-normal text-center text-gray-600 mt-4 xl:w-1/2 w-10/12">We just aim at being a part of the following companies. These build up enthusiasm and adrenaline in us. We aim at making projects which are production level worthy and can be used in daily life and is fun to use too.</p>
                </div>
                <div className="flex items-center justify-center mt-10">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6 w-full">
                        <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                            <svg width={73} height={24} viewBox="0 0 73 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M70.7259 14.6675L72.751 16.0202C72.0937 16.9902 70.5216 18.6544 67.8038 18.6544C64.4286 18.6544 61.915 16.038 61.915 12.7096C61.915 9.1677 64.4553 6.76489 67.5195 6.76489C70.6016 6.76489 72.1115 9.2211 72.6 10.5471L72.8664 11.2234L64.926 14.5162C65.53 15.7087 66.4715 16.3138 67.8038 16.3138C69.136 16.3138 70.0598 15.6553 70.7259 14.6675ZM64.4997 12.5227L69.8022 10.3157C69.5091 9.57707 68.6386 9.05201 67.5995 9.05201C66.2761 9.05201 64.4375 10.2267 64.4997 12.5227Z" fill="#4B5563" />
                                <path d="M58.0869 0.704529H60.6449V18.1116H58.0869V0.704529Z" fill="#4B5563" />
                                <path d="M54.0549 7.22771H56.5241V17.8001C56.5241 22.1874 53.9395 23.994 50.8841 23.994C48.0064 23.994 46.2744 22.0539 45.626 20.4788L47.8909 19.5354C48.2995 20.5055 49.2854 21.6535 50.8841 21.6535C52.847 21.6535 54.0549 20.4343 54.0549 18.156V17.3017H53.9661C53.3799 18.0137 52.2608 18.6544 50.8397 18.6544C47.8731 18.6544 45.1553 16.0647 45.1553 12.7275C45.1553 9.37244 47.8731 6.75604 50.8397 6.75604C52.2519 6.75604 53.3799 7.38789 53.9661 8.08204H54.0549V7.22771ZM54.2326 12.7275C54.2326 10.6272 52.8381 9.09656 51.0617 9.09656C49.2676 9.09656 47.7577 10.6272 47.7577 12.7275C47.7577 14.801 49.2676 16.305 51.0617 16.305C52.8381 16.3139 54.2326 14.801 54.2326 12.7275Z" fill="#4B5563" />
                                <path d="M31.1128 12.6829C31.1128 16.1092 28.4483 18.6277 25.1797 18.6277C21.9112 18.6277 19.2466 16.1003 19.2466 12.6829C19.2466 9.23891 21.9112 6.72931 25.1797 6.72931C28.4483 6.72931 31.1128 9.23891 31.1128 12.6829ZM28.5193 12.6829C28.5193 10.5471 26.9739 9.07872 25.1797 9.07872C23.3856 9.07872 21.8401 10.5471 21.8401 12.6829C21.8401 14.801 23.3856 16.2872 25.1797 16.2872C26.9739 16.2872 28.5193 14.801 28.5193 12.6829Z" fill="#4B5563" />
                                <path d="M44.0713 12.7096C44.0713 16.1359 41.4067 18.6544 38.1382 18.6544C34.8697 18.6544 32.2051 16.1359 32.2051 12.7096C32.2051 9.2656 34.8697 6.76489 38.1382 6.76489C41.4067 6.76489 44.0713 9.2567 44.0713 12.7096ZM41.4689 12.7096C41.4689 10.5738 39.9235 9.10541 38.1293 9.10541C36.3352 9.10541 34.7897 10.5738 34.7897 12.7096C34.7897 14.8277 36.3352 16.3138 38.1293 16.3138C39.9323 16.3138 41.4689 14.8188 41.4689 12.7096Z" fill="#4B5563" />
                                <path d="M9.49414 16.0469C5.77262 16.0469 2.85935 13.0389 2.85935 9.31012C2.85935 5.58131 5.77262 2.57335 9.49414 2.57335C11.5015 2.57335 12.967 3.36539 14.0506 4.37991L15.8358 2.59115C14.3259 1.14056 12.3097 0.0370483 9.49414 0.0370483C4.39592 0.0370483 0.105957 4.20192 0.105957 9.31012C0.105957 14.4183 4.39592 18.5832 9.49414 18.5832C12.2475 18.5832 14.3259 17.6755 15.9513 15.9846C17.6211 14.3115 18.1363 11.9621 18.1363 10.0577C18.1363 9.46141 18.0652 8.84736 17.9853 8.39349H9.49414V10.8675H15.5427C15.3651 12.416 14.8766 13.475 14.1572 14.1958C13.2867 15.0769 11.91 16.0469 9.49414 16.0469Z" fill="#4B5563" />
                            </svg>
                        </div>
                        <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                            <svg width={98} height={24} viewBox="0 0 98 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M96.9649 16.6199C96.6611 16.3994 96.4202 16.3679 96.2213 16.7878C92.8072 24.1884 87.0577 20.4934 87.6338 20.8188C88.9114 20.231 92.2627 17.5436 91.7599 13.8171C91.4563 11.5391 89.5083 10.5314 87.4348 10.8988C83.8218 11.5286 82.5023 15.4337 83.1725 18.8873C83.2877 19.4857 83.4972 19.9685 83.7172 20.4514C79.6433 23.7791 78.0202 17.4806 77.8315 16.7248C77.8212 16.6828 80.9838 14.048 81.8635 7.76009C82.7851 1.17823 80.6905 -0.0289627 78.5438 0.0130267C74.5747 0.0865083 73.5064 8.38992 74.9411 15.3077C74.8259 15.3392 74.2604 15.6541 73.3599 15.6856C72.7105 13.6386 69.9353 11.8436 69.2127 12.5364C67.4009 14.2685 69.6525 17.6486 71.2445 17.911C70.2913 23.8001 64.3221 22.3409 65.4321 14.9613C67.3695 11.3502 68.8566 5.96503 68.5844 2.72134C68.4901 1.57713 67.6418 0.0340214 65.7254 0.107503C62.0391 0.254467 61.6411 8.55787 62.0704 14.4574C62.0496 14.3104 61.8401 15.1712 60.3319 15.6016C59.9759 13.6176 56.7819 11.6126 56.0279 12.5784C54.6246 14.3734 57.0646 17.5751 58.2166 17.7956C57.2636 23.6846 51.2943 22.2254 52.4044 14.8458C54.3524 11.2347 55.8289 5.86006 55.567 2.61638C55.4729 1.47216 54.6246 -0.0709522 52.708 0.00252936C49.0217 0.149492 48.6237 8.4529 49.0533 14.3524C49.0322 14.2055 48.8227 15.0978 47.2518 15.5176C47.1996 12.9353 43.995 11.7596 43.22 12.5784C41.8481 14.048 43.5341 17.0607 45.0945 17.7956C44.1416 23.6846 38.1723 22.2254 39.2823 14.8458C41.2198 11.2347 42.7069 5.84957 42.4347 2.60587C42.3509 1.47216 41.5026 -0.0709522 39.5859 0.00252936C35.8996 0.149492 35.6066 8.8728 36.0359 14.7723C34.821 19.9895 30.7473 26.4979 31.2812 13.4497C31.3337 12.5364 31.3861 12.19 30.9357 11.8436C30.5902 11.5811 29.8152 11.7071 29.3962 11.7176C28.8831 11.7386 28.7471 12.043 28.6422 12.4944C28.3805 13.6701 28.3281 14.8143 28.2862 16.3784C28.2654 17.1132 28.2024 17.4492 27.9196 18.4464C27.6369 19.4437 26.0451 21.2597 25.1654 20.9553C23.9506 20.5354 24.3485 17.1027 24.5788 14.7408C24.7675 12.8723 24.1601 12.043 22.6101 11.7386C21.699 11.5496 21.144 11.5811 20.2015 11.2767C19.3008 10.9933 19.1018 9.29271 17.1958 9.85956C16.1486 10.1745 16.8188 12.3894 16.5675 14.0375C15.3317 22.131 12.766 22.3514 11.5721 18.4254C16.934 5.24071 13.1116 0.0445188 10.8809 0.0445188C8.55603 0.0445188 5.89602 1.65061 7.01656 11.938C6.472 11.7806 6.30444 11.6966 5.69703 11.6966C2.31442 11.6861 0 14.4364 0 17.8271C0 21.2177 2.31442 23.968 5.70752 23.968C7.70775 23.968 9.11106 23.0547 10.1793 21.6481C10.8705 22.6454 11.7187 23.989 13.2686 23.926C17.8765 23.7476 19.217 14.2685 19.3741 13.7331C19.8663 13.8066 20.3376 13.9535 20.7879 14.027C21.5419 14.1425 21.6048 14.4469 21.5838 15.2027C21.3848 21.6481 22.5682 23.905 25.2598 23.905C26.7572 23.905 28.0978 22.4249 29.0193 21.3752C29.7106 22.8028 30.7995 23.863 32.2763 23.905C35.8369 23.989 37.2088 18.2994 37.0831 19.0448C36.9888 19.6326 38.235 23.863 41.911 23.884C46.4559 23.905 47.3042 18.8978 47.3986 18.058C47.4194 17.911 47.4091 17.89 47.3986 18.058C47.3986 18.0685 47.3986 18.0895 47.3986 18.1105C48.8438 17.8375 49.5872 17.0713 49.5872 17.0713C49.5872 17.0713 50.7496 23.968 55.0331 23.8946C59.4839 23.8106 60.3319 19.2862 60.4368 18.4044C60.4576 18.2155 60.4473 18.1945 60.4368 18.4044C60.4368 18.4149 60.4368 18.4254 60.4368 18.4254C62.1542 17.7956 62.6046 17.1762 62.6046 17.1762C62.6046 17.1762 63.5262 23.9365 68.0502 23.9995C72.0823 24.0521 73.5797 19.9055 73.5902 18.1735C74.2709 18.184 75.5277 17.7641 75.4963 17.7431C75.4963 17.7431 76.9729 23.6531 81.099 23.9575C83.0365 24.1044 84.492 22.8658 85.3195 22.2989C87.2672 23.884 93.7498 25.8996 97.8446 18.9398C98.431 17.953 97.1847 16.7668 96.9649 16.6199ZM5.53994 21.6691C3.56066 21.6691 2.29348 19.8321 2.29348 17.8585C2.29348 15.8851 3.45593 14.048 5.43524 14.048C6.32539 14.048 6.81759 14.1425 7.51925 14.7513C7.64493 15.2447 8.00098 16.3889 8.17902 16.9138C8.40941 17.6066 8.69217 18.205 8.96446 18.8453C8.55603 20.5039 7.25743 21.6691 5.53994 21.6691ZM10.3573 14.8038C10.2735 14.6674 10.2945 14.7513 10.2002 14.6254C9.84415 13.6386 9.1425 11.4342 9.05872 8.92529C8.96446 6.09101 9.43573 2.76334 10.8285 2.76334C11.7711 2.76334 12.7764 9.50266 10.3573 14.8038ZM38.2245 11.8541C38.0047 10.1745 37.9942 2.66887 39.7851 2.8788C40.78 3.2777 39.1566 10.3529 38.2245 11.8541ZM51.3465 11.8541C51.1267 10.1745 51.1162 2.66887 52.9072 2.8788C53.902 3.2777 52.2787 10.3529 51.3465 11.8541ZM64.364 11.959C64.1439 10.2794 64.1336 2.77382 65.9243 2.98378C66.9192 3.37219 65.2961 10.4579 64.364 11.959ZM78.7322 2.42743C80.3764 2.25946 80.3031 9.45017 77.0148 13.985C76.5853 12.3474 75.9361 2.99429 78.7322 2.42743ZM85.6441 17.911C85.1205 15.2342 86.4819 13.4811 87.8852 13.2922C88.3775 13.2187 89.0896 13.5336 89.2256 14.132C89.4561 15.2552 89.1942 16.9243 86.0421 19.0343C86.0526 19.0448 85.7593 18.4989 85.6441 17.911ZM29.9409 9.6601C31.0614 9.6601 31.9725 8.74683 31.9725 7.62363C31.9725 6.5004 31.0614 5.58713 29.9409 5.58713C28.8204 5.58713 27.9091 6.5004 27.9091 7.62363C27.9091 8.74683 28.8204 9.6601 29.9409 9.6601Z" fill="#4B5563" />
                            </svg>
                        </div>
                        <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                            <svg width={80} height={24} viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M49.6305 18.7687C44.9815 22.18 38.2432 24 32.4416 24C24.3068 24 16.9834 21.0048 11.443 16.0231C11.0077 15.6314 11.3977 15.0975 11.9201 15.4026C17.8993 18.8658 25.2923 20.9493 32.9291 20.9493C38.0795 20.9493 43.7453 19.8885 48.9549 17.6871C49.7419 17.3543 50.4001 18.2002 49.6305 18.7687Z" fill="#4B5563" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M51.5632 16.5674C50.9712 15.8117 47.6352 16.2103 46.1378 16.3871C45.6816 16.4426 45.6119 16.0474 46.0228 15.7631C48.6799 13.9015 53.0398 14.4388 53.5482 15.0628C54.0566 15.6903 53.4158 20.041 50.919 22.1176C50.5359 22.4365 50.1703 22.2667 50.3409 21.8437C50.9016 20.4501 52.1587 17.3266 51.5632 16.5674Z" fill="#4B5563" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M46.242 2.62086V0.811242C46.242 0.537373 46.4509 0.353638 46.7016 0.353638H54.8399C55.1011 0.353638 55.31 0.54084 55.31 0.811242V2.36086C55.3065 2.62086 55.0871 2.9606 54.6971 3.49794L50.48 9.49187C52.047 9.45374 53.7011 9.686 55.1219 10.4833C55.4423 10.6636 55.5294 10.9271 55.5538 11.1871V13.118C55.5538 13.3815 55.2612 13.69 54.9548 13.5306C52.451 12.2236 49.1253 12.0815 46.3569 13.5444C46.0748 13.697 45.7788 13.3919 45.7788 13.1284V11.2946C45.7788 10.9999 45.7823 10.4972 46.0783 10.05L50.964 3.075H46.7121C46.4509 3.075 46.242 2.89127 46.242 2.62086Z" fill="#4B5563" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.5549 13.9119H14.079C13.8422 13.8946 13.6541 13.7178 13.6367 13.4925V0.842475C13.6367 0.589406 13.8491 0.388336 14.1138 0.388336H16.4226C16.6629 0.398729 16.8544 0.58247 16.8718 0.811272V2.46489H16.9171C17.5195 0.86674 18.6513 0.121399 20.1766 0.121399C21.7262 0.121399 22.6943 0.86674 23.3908 2.46489C23.9897 0.86674 25.3513 0.121399 26.8105 0.121399C27.8482 0.121399 28.9834 0.547803 29.6764 1.50461C30.46 2.56889 30.2998 4.11504 30.2998 5.47052L30.2963 13.4543C30.2963 13.7074 30.0839 13.9119 29.8192 13.9119H27.3467C27.0995 13.8946 26.901 13.697 26.901 13.4543V6.74973C26.901 6.21586 26.9497 4.88465 26.8314 4.37851C26.6468 3.52917 26.0931 3.28996 25.3757 3.28996C24.7768 3.28996 24.1499 3.68863 23.8957 4.32651C23.6415 4.96438 23.6659 6.03212 23.6659 6.74973V13.4543C23.6659 13.7074 23.4535 13.9119 23.1888 13.9119H20.7163C20.4656 13.8946 20.2706 13.697 20.2706 13.4543L20.2671 6.74973C20.2671 5.33879 20.5004 3.26223 18.7419 3.26223C16.9624 3.26223 17.032 5.28678 17.032 6.74973V13.4543C17.032 13.7074 16.8196 13.9119 16.5549 13.9119" fill="#4B5563" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M62.3164 0.121399C65.9903 0.121399 67.9787 3.26223 67.9787 7.25587C67.9787 11.1143 65.7813 14.1754 62.3164 14.1754C58.7087 14.1754 56.7446 11.0346 56.7446 7.12067C56.7446 3.1825 58.733 0.121399 62.3164 0.121399ZM62.3373 2.70409C60.5125 2.70409 60.3976 5.17932 60.3976 6.722C60.3976 8.26815 60.3732 11.5684 62.3164 11.5684C64.2352 11.5684 64.3257 8.90602 64.3257 7.2836C64.3257 6.21586 64.2804 4.94012 63.9566 3.92784C63.678 3.0473 63.1243 2.70409 62.3373 2.70409Z" fill="#4B5563" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M72.7428 13.9119H70.2773C70.0301 13.8946 69.8316 13.697 69.8316 13.4543L69.8281 0.800872C69.849 0.568603 70.0545 0.388336 70.3052 0.388336H72.6001C72.816 0.398729 72.9936 0.544337 73.0423 0.741939V2.67636H73.0876C73.7806 0.946474 74.7522 0.121399 76.462 0.121399C77.5729 0.121399 78.6559 0.52007 79.3524 1.61208C80.0001 2.62436 80.0001 4.32651 80.0001 5.55025V13.5133C79.9722 13.7351 79.7668 13.9119 79.523 13.9119H77.0401C76.8137 13.8946 76.6257 13.7282 76.6013 13.5133V6.64226C76.6013 5.25905 76.7615 3.2345 75.0516 3.2345C74.4492 3.2345 73.8955 3.63664 73.6204 4.24677C73.2722 5.01985 73.2269 5.78946 73.2269 6.64226V13.4543C73.2234 13.7074 73.0075 13.9119 72.7429 13.9119" fill="#4B5563" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M39.7545 7.86948C39.7545 8.82975 39.7789 9.63056 39.2914 10.4834C38.8978 11.1767 38.271 11.6031 37.578 11.6031C36.6274 11.6031 36.0702 10.882 36.0702 9.81776C36.0702 7.71694 37.9611 7.33561 39.7545 7.33561V7.86948ZM42.2513 13.8773C42.0877 14.0229 41.8509 14.0333 41.6663 13.9362C40.8445 13.2567 40.6947 12.9413 40.2455 12.293C38.8874 13.6727 37.9228 14.0853 36.1642 14.0853C34.0783 14.0853 32.459 12.8061 32.459 10.2442C32.459 8.24388 33.5455 6.88147 35.0986 6.21586C36.4428 5.62652 38.3198 5.52252 39.7545 5.35959V5.04065C39.7545 4.45477 39.7998 3.76143 39.4515 3.2553C39.1521 2.80116 38.574 2.61396 38.0621 2.61396C37.1184 2.61396 36.2791 3.09583 36.0737 4.09424C36.0319 4.31611 35.8682 4.53451 35.6418 4.54491L33.2425 4.28837C33.0405 4.24331 32.8142 4.08037 32.8734 3.77184C33.4236 0.873672 36.0563 6.10352e-05 38.4103 6.10352e-05C39.6152 6.10352e-05 41.1892 0.318998 42.1399 1.22727C43.3448 2.34702 43.2299 3.84117 43.2299 5.46705V9.30816C43.2299 10.4626 43.7104 10.9687 44.1632 11.5927C44.3199 11.8146 44.3547 12.0815 44.1527 12.2479C43.6478 12.6674 42.7493 13.4474 42.2548 13.8842L42.2513 13.8773" fill="#4B5563" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.29552 7.86966C7.29552 8.82994 7.3199 9.63074 6.83237 10.4836C6.43886 11.1769 5.81552 11.6033 5.11905 11.6033C4.16837 11.6033 3.61468 10.8822 3.61468 9.81795C3.61468 7.71713 5.50559 7.33579 7.29552 7.33579V7.86966ZM9.79236 13.8775C9.62869 14.0231 9.39189 14.0335 9.20733 13.9364C8.3855 13.2569 8.23923 12.9414 7.78653 12.2932C6.42841 13.6729 5.46729 14.0855 3.70522 14.0855C1.62277 14.0855 0 12.8062 0 10.2444C0 8.24407 1.08997 6.88165 2.63962 6.21604C3.98381 5.6267 5.86079 5.5227 7.29552 5.35977V5.04083C7.29552 4.45496 7.34079 3.76162 6.99604 3.25548C6.69307 2.80134 6.115 2.61414 5.60658 2.61414C4.66287 2.61414 3.82014 3.09601 3.61468 4.09442C3.57289 4.31629 3.40922 4.53469 3.18635 4.54509L0.783529 4.28856C0.581552 4.24349 0.358681 4.08055 0.414399 3.77202C0.968093 0.873856 3.59726 0.000244141 5.95133 0.000244141C7.15622 0.000244141 8.73025 0.319181 9.68093 1.22746C10.8858 2.3472 10.7709 3.84135 10.7709 5.46724V9.30834C10.7709 10.4628 11.2515 10.9689 11.7042 11.5929C11.8644 11.8148 11.8992 12.0817 11.6972 12.2481C11.1923 12.6676 10.2938 13.4476 9.79932 13.8844L9.79237 13.8774" fill="#4B5563" />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width={80} height={24} fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                            <svg width={93} height={24} viewBox="0 0 93 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 3.52209H3.62357V16.895H10.3319V20.2831H0V3.52209Z" fill="#4B5563" />
                                <path d="M11.934 8.91867H15.4151V20.2768H11.934V8.91867ZM13.6745 3.27191C14.0739 3.27198 14.4643 3.39204 14.7963 3.6169C15.1284 3.84176 15.3871 4.16133 15.5399 4.53519C15.6927 4.90905 15.7327 5.32042 15.6547 5.71727C15.5767 6.11413 15.3844 6.47866 15.102 6.76476C14.8195 7.05086 14.4597 7.24568 14.068 7.3246C13.6763 7.40351 13.2703 7.36297 12.9013 7.2081C12.5323 7.05324 12.217 6.791 11.9951 6.45455C11.7732 6.11809 11.6548 5.72254 11.6548 5.3179C11.6548 5.04918 11.707 4.7831 11.8085 4.53485C11.91 4.28659 12.0588 4.06103 12.2464 3.87104C12.4339 3.68104 12.6566 3.53035 12.9016 3.42755C13.1467 3.32475 13.4093 3.27186 13.6745 3.27191Z" fill="#4B5563" />
                                <path d="M29.9766 3.51959H33.4576V13.5364L37.4028 8.91359H41.6708L37.1019 14.172L41.5747 20.2817H37.1994L33.5041 14.6673H33.4584V20.2809H29.9773L29.9766 3.51959Z" fill="#4B5563" />
                                <path d="M17.3452 8.9198H20.6881V10.472H20.7356C21.0695 9.89242 21.5525 9.4156 22.1331 9.09245C22.7136 8.76931 23.3699 8.61198 24.0318 8.63728C27.5618 8.63728 28.2116 10.9904 28.2116 14.0474V20.2761H24.7305V14.7539C24.7305 13.4357 24.7066 11.7413 22.9175 11.7413C21.108 11.7413 20.8288 13.1767 20.8288 14.658V20.2747H17.3477L17.3452 8.9198Z" fill="#4B5563" />
                                <path d="M49.0021 13.2767C49.0087 12.9906 48.958 12.7061 48.8529 12.4404C48.7479 12.1747 48.5906 11.9334 48.3908 11.7311C48.191 11.5288 47.9527 11.3696 47.6904 11.2634C47.4281 11.1571 47.1473 11.1059 46.8648 11.1128C46.2566 11.0745 45.6579 11.2798 45.1977 11.6846C44.7375 12.0894 44.4528 12.6612 44.4049 13.2767H49.0021ZM51.9508 18.31C51.3724 19.0207 50.6451 19.5921 49.8218 19.983C48.9985 20.3738 48.0997 20.5743 47.1905 20.5698C43.7094 20.5698 40.9224 18.2155 40.9224 14.5699C40.9224 10.9244 43.709 8.57123 47.1905 8.57123C50.4442 8.57123 52.4846 10.9225 52.4846 14.5699V15.6758H44.4049C44.5055 16.3029 44.8264 16.8721 45.3085 17.2785C45.7906 17.6848 46.4014 17.901 47.0284 17.8871C47.5239 17.884 48.0107 17.7554 48.4446 17.5129C48.8785 17.2705 49.2456 16.922 49.5126 16.4991L51.9508 18.31Z" fill="#4B5563" />
                                <path d="M59.74 11.6642C57.9995 11.6642 56.9552 12.8417 56.9552 14.5574C56.9552 16.2731 57.9991 17.4517 59.74 17.4517C61.4809 17.4517 62.5274 16.276 62.5274 14.5574C62.5274 12.8388 61.4827 11.6642 59.74 11.6642ZM65.7322 20.2747H62.5274V18.7684H62.4799C62.0779 19.3163 61.5564 19.7627 60.9561 20.073C60.3558 20.3832 59.693 20.5488 59.0191 20.5569C55.6744 20.5569 53.4712 18.1112 53.4712 14.6526C53.4712 11.4761 55.4209 8.55943 58.6261 8.55943C60.0667 8.55943 61.4124 8.95878 62.2018 10.0657H62.2475V3.51849H65.7318L65.7322 20.2747Z" fill="#4B5563" />
                                <path d="M89.2328 20.2813H85.7517V14.758C85.7517 13.4409 85.7285 11.7454 83.9412 11.7454C82.1282 11.7454 81.8508 13.1804 81.8508 14.6621V20.2809H78.3697V8.92273H81.7115V10.4749H81.7583C82.0927 9.89558 82.576 9.41898 83.1566 9.09589C83.7373 8.77279 84.3935 8.61531 85.0555 8.64021C88.5837 8.64021 89.2342 10.9915 89.2342 14.0504L89.2328 20.2813ZM74.4419 7.37014C74.0423 7.37022 73.6517 7.25025 73.3195 7.02541C72.9872 6.80058 72.7283 6.48097 72.5753 6.10701C72.4224 5.73305 72.3823 5.32153 72.4602 4.92449C72.538 4.52745 72.7304 4.16273 73.0128 3.87644C73.2953 3.59015 73.6552 3.39515 74.0471 3.3161C74.4389 3.23706 74.8451 3.27752 75.2142 3.43236C75.5834 3.58721 75.8989 3.84948 76.121 4.18602C76.343 4.52256 76.4616 4.91825 76.4616 5.32306C76.4617 5.59184 76.4095 5.85799 76.308 6.10633C76.2065 6.35467 76.0578 6.58032 75.8702 6.77041C75.6827 6.9605 75.46 7.1113 75.2149 7.2142C74.9698 7.31711 74.7072 7.3701 74.4419 7.37014ZM76.1824 20.2813H72.6977V8.92273H76.1824V20.2813ZM90.9682 0.00143861H70.9485C70.4941 -0.00375676 70.0562 0.174036 69.7312 0.495747C69.4061 0.817459 69.2204 1.25677 69.2148 1.71714V22.0848C69.2202 22.5454 69.4058 22.985 69.7309 23.307C70.0559 23.6291 70.4939 23.8072 70.9485 23.8023H90.9682C91.4238 23.8081 91.8629 23.6305 92.1893 23.3084C92.5156 22.9864 92.7025 22.5463 92.7088 22.0848V1.71567C92.7023 1.25439 92.5153 0.814576 92.189 0.492873C91.8626 0.171169 91.4235 -0.00611535 90.9682 -3.15404e-05" fill="#4B5563" />
                            </svg>
                        </div>
                        <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                            <svg width={109} height={24} viewBox="0 0 109 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M53.4227 14.3172C53.3398 14.5241 52.801 15.5172 51.5162 15.5172C50.0242 15.5172 49.444 14.2758 49.444 13.3655C49.444 11.8758 50.4801 10.5103 51.9721 10.5103C53.5884 10.5103 53.9615 11.7103 54.0029 11.9172H56.3653C56.4896 11.0482 55.785 8.3172 52.055 8.3172C49.3196 8.3172 47.123 10.5103 47.123 13.4069C47.123 15.8069 48.6151 17.6275 51.3919 17.6275C54.8318 17.6275 55.785 14.9379 55.9094 14.2758L53.4227 14.3172Z" fill="#4B5563" />
                                <path d="M35.2698 14.9793C35.2698 14.8552 35.3112 14.5655 35.4355 14.0276C35.5599 13.4896 37.2177 5.79309 37.2177 5.79309H34.9796L33.1561 14.2759C33.0732 14.6483 33.0317 14.9793 33.0317 15.3103C33.0317 17.1724 34.4823 17.7103 35.6428 17.7103C36.0572 17.7103 36.4302 17.6276 36.5546 17.6276C36.596 17.4621 36.9276 15.8483 36.969 15.7655C36.9276 15.7655 36.6789 15.8069 36.3888 15.8069C35.5184 15.7655 35.2698 15.4345 35.2698 14.9793Z" fill="#4B5563" />
                                <path d="M66.8092 8.35861H63.7008L59.7221 11.9586L61.0898 5.75171H58.8518L56.2822 17.5034H58.5202L59.1419 14.6483L60.5096 13.5724L62.4161 17.5034H64.9028L62.2088 12.2069L66.8092 8.35861Z" fill="#4B5563" />
                                <path d="M23.0433 13.8621C23.2091 13.0345 24.8255 5.75171 24.8255 5.75171C24.8255 5.75171 27.5608 5.75171 29.0529 5.75171C32.1198 5.75171 32.8658 7.44826 32.8658 8.48274C32.8658 10.7586 30.7106 11.3793 30.4205 11.4621C30.6692 11.5448 32.0783 12.0827 32.0783 13.9034C32.0783 15.8483 30.2548 17.5034 27.4779 17.5034C27.4779 17.5034 26.4833 17.5034 26.1932 17.5034C23.8722 17.5034 22.5875 15.8896 23.0433 13.8621ZM29.6745 13.7379C29.6745 13.2 29.3015 12.4965 27.7266 12.4965H25.6544L25.0741 15.3103H27.3951C28.8871 15.3103 29.6745 14.6483 29.6745 13.7379ZM30.4205 8.97929C30.4205 8.39998 29.9646 7.90343 28.9285 7.90343H26.6491L26.1517 10.2621H28.5141C29.7989 10.3034 30.4205 9.68274 30.4205 8.97929Z" fill="#4B5563" />
                                <path d="M65.7732 13.8621C65.939 13.0345 67.5553 5.75171 67.5553 5.75171C67.5553 5.75171 70.2907 5.75171 71.7827 5.75171C74.8497 5.75171 75.5957 7.44826 75.5957 8.48274C75.5957 10.7586 73.4405 11.3793 73.1504 11.4621C73.3991 11.5448 74.8082 12.0827 74.8082 13.9034C74.8082 15.8483 72.9846 17.5034 70.2078 17.5034C70.2078 17.5034 69.2131 17.5034 68.923 17.5034C66.6021 17.5034 65.3588 15.8896 65.7732 13.8621ZM72.4044 13.7379C72.4044 13.2 72.0314 12.4965 70.4565 12.4965H68.3842L67.7626 15.3517H70.0835C71.6584 15.3103 72.4044 14.6483 72.4044 13.7379ZM73.1919 8.97929C73.1919 8.39998 72.7774 7.90343 71.6998 7.90343H69.4204L68.923 10.2621H71.2854C72.5287 10.3034 73.1919 9.68274 73.1919 8.97929Z" fill="#4B5563" />
                                <path d="M90.9715 8.35858C88.6092 8.35858 86.9928 9.76548 86.454 12.3724C86.2054 13.4896 85.3765 17.462 85.3765 17.462H87.6145C87.6145 17.462 88.4434 13.6965 88.6921 12.4965C89.0236 10.9241 89.8525 10.4275 90.9715 10.4275C91.3445 10.4275 91.5518 10.4689 91.6761 10.4689C91.7175 10.1379 92.0491 8.73099 92.132 8.39996C91.8419 8.44134 91.4689 8.35858 90.9715 8.35858Z" fill="#4B5563" />
                                <path d="M98.5147 20.9793L105.975 8.35858H103.571L100.131 14.3172L99.3436 8.35858C99.3436 8.35858 98.1417 8.35858 96.774 8.35858C93.8314 8.35858 92.2979 9.68272 91.7591 12.2482C91.469 13.531 90.6401 17.462 90.6401 17.462H92.8782C92.8782 17.462 93.7071 13.6965 93.9972 12.2069C94.3287 10.7586 95.4063 10.3034 96.5668 10.5517L97.0226 8.39996C97.3542 10.4275 98.4318 17.0069 98.4318 17.0069L96.1109 20.9793H98.5147Z" fill="#4B5563" />
                                <path d="M41.6521 13.6138C42.1495 13.531 43.5586 13.3241 43.7658 13.2827C43.7244 13.4482 43.6829 13.6965 43.6415 13.862C43.3928 14.9793 42.2738 15.6827 41.0304 15.6827C40.243 15.6827 39.7871 15.2689 39.7871 14.731C39.7457 14.3172 40.1601 13.8207 41.6521 13.6138ZM40.8232 11.2138C40.8647 11.131 41.4449 10.262 42.854 10.262C43.7244 10.262 44.1803 10.5931 44.1803 10.9655C44.1803 11.5034 43.2685 11.6689 41.735 11.8758C39.0825 12.2482 37.3833 13.0758 37.3833 14.9793C37.3833 16.3448 38.5023 17.6689 40.5331 17.6689C42.1909 17.6689 43.0612 16.6758 43.1441 16.5931C43.1441 16.8413 43.1856 17.2138 43.227 17.5034C43.3928 17.5034 44.9677 17.5034 45.5065 17.5034C45.4236 17.0896 45.2578 16.3448 45.5479 15.1448C45.6723 14.5241 46.0867 12.662 46.2939 11.6275C46.6669 9.7241 45.6308 8.35858 42.9369 8.35858C39.4555 8.35858 38.4609 10.8413 38.2951 11.2551H40.8232V11.2138Z" fill="#4B5563" />
                                <path d="M82.1025 14.7724C82.0196 14.9379 81.4808 15.7241 80.2789 15.7241C78.5382 15.7241 78.1238 14.2344 78.1652 13.862C79.077 13.862 84.4648 13.862 84.9207 13.862C84.9622 13.6965 85.1279 13.0758 85.1279 12.4965C85.1279 10.3448 83.6774 8.39996 80.7348 8.39996C78.0409 8.39996 75.8857 10.6344 75.8857 13.3241C75.8857 15.8896 77.4606 17.7517 80.196 17.7517C83.5945 17.7517 84.5063 15.1034 84.5892 14.8551C84.0089 14.7724 82.1025 14.7724 82.1025 14.7724ZM80.7762 10.3862C82.2682 10.3862 82.8485 11.2965 82.7656 12.0413C81.8952 12.0413 79.3671 12.0413 78.4968 12.0413C78.6211 11.5448 79.3257 10.3862 80.7762 10.3862Z" fill="#4B5563" />
                                <path d="M8.99339 4.42753C8.99339 3.84822 8.66183 3.14478 7.21126 3.14478C6.63103 3.14478 4.97324 3.14478 4.97324 3.14478L4.35156 6.08271C4.35156 6.08271 5.55346 6.08271 6.67248 6.08271C8.4546 6.08271 8.99339 5.21374 8.99339 4.42753Z" fill="#4B5563" />
                                <path d="M15.0032 4.42753C15.0032 3.84822 14.6716 3.14478 13.221 3.14478C12.6408 3.14478 10.983 3.14478 10.983 3.14478L10.3613 6.08271C10.3613 6.08271 11.5632 6.08271 12.6822 6.08271C14.5058 6.08271 15.0032 5.21374 15.0032 4.42753Z" fill="#4B5563" />
                                <path d="M8.16478 8.85515C8.16478 8.27584 7.83322 7.57239 6.38265 7.57239C5.80242 7.57239 4.14462 7.57239 4.14462 7.57239L3.52295 10.5103C3.52295 10.5103 4.72485 10.5103 5.84386 10.5103C7.66744 10.5103 8.16478 9.64135 8.16478 8.85515Z" fill="#4B5563" />
                                <path d="M14.2155 8.85515C14.2155 8.27584 13.8839 7.57239 12.4334 7.57239C11.8531 7.57239 10.1953 7.57239 10.1953 7.57239L9.53223 10.5103C9.53223 10.5103 10.7341 10.5103 11.8531 10.5103C13.6767 10.5103 14.2155 9.64135 14.2155 8.85515Z" fill="#4B5563" />
                                <path d="M20.5153 7.03447C20.5153 6.45516 20.1837 5.75171 18.7332 5.75171C18.1529 5.75171 16.4951 5.75171 16.4951 5.75171L15.832 8.68964C15.832 8.68964 17.0339 8.68964 18.1529 8.68964C19.9765 8.68964 20.5153 7.86205 20.5153 7.03447Z" fill="#4B5563" />
                                <path d="M19.6448 11.6276C19.6448 11.0483 19.3132 10.3448 17.8626 10.3448C17.2824 10.3448 15.6246 10.3448 15.6246 10.3448L15.0029 13.2828C15.0029 13.2828 16.2048 13.2828 17.3238 13.2828C19.106 13.2828 19.6448 12.4552 19.6448 11.6276Z" fill="#4B5563" />
                                <path d="M13.3454 13.4482C13.3454 12.8689 13.0139 12.1655 11.5633 12.1655C10.9831 12.1655 9.32529 12.1655 9.32529 12.1655L8.70361 15.1034C8.70361 15.1034 9.90551 15.1034 11.0245 15.1034C12.8067 15.1034 13.3454 14.2344 13.3454 13.4482Z" fill="#4B5563" />
                                <path d="M104.731 14.8966C105.436 14.8966 106.057 15.4759 106.057 16.2207C106.057 17.007 105.436 17.5449 104.731 17.5449C103.985 17.5449 103.405 16.9656 103.405 16.2207C103.405 15.4345 104.026 14.8966 104.731 14.8966ZM104.731 15.1035C104.109 15.1035 103.653 15.5587 103.653 16.2207C103.653 16.8828 104.109 17.338 104.731 17.338C105.353 17.338 105.809 16.8828 105.809 16.2207C105.809 15.5587 105.353 15.1035 104.731 15.1035ZM104.441 16.9656H104.192V15.4345H104.772C105.145 15.4345 105.311 15.5587 105.311 15.8897C105.311 16.1794 105.145 16.2621 104.897 16.3035L105.353 16.9656H105.104L104.69 16.3035H104.441V16.9656ZM104.441 16.0966H104.731C105.021 16.0966 105.104 16.0138 105.104 15.8483C105.104 15.6828 105.021 15.6001 104.772 15.6001H104.441V16.0966Z" fill="#4B5563" />
                            </svg>
                        </div>
                        <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                            <svg width={113} height={24} viewBox="0 0 113 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M112.359 10.8577V8.88169H109.906V5.80974L109.823 5.83517L107.518 6.54036L107.473 6.55417V8.8818H103.835V7.58511C103.835 6.98132 103.97 6.51928 104.236 6.21114C104.5 5.90669 104.878 5.75191 105.36 5.75191C105.707 5.75191 106.066 5.83354 106.427 5.99451L106.517 6.03495V3.95394L106.475 3.93828C106.138 3.8172 105.68 3.75623 105.112 3.75623C104.396 3.75623 103.746 3.91198 103.178 4.22067C102.611 4.52978 102.165 4.97107 101.852 5.53214C101.54 6.09255 101.382 6.73981 101.382 7.45609V8.88169H99.6735V10.8577H101.382V19.1823H103.835V10.8577H107.473V16.1478C107.473 18.3266 108.5 19.4306 110.527 19.4306C110.86 19.4306 111.211 19.3916 111.569 19.3152C111.933 19.2367 112.181 19.1584 112.327 19.0747L112.36 19.0556V17.0613L112.26 17.1273C112.127 17.2159 111.961 17.2884 111.767 17.3424C111.571 17.3972 111.408 17.4247 111.282 17.4247C110.807 17.4247 110.456 17.2968 110.238 17.0443C110.018 16.7895 109.906 16.344 109.906 15.7208V10.8577H112.359ZM94.1959 17.4251C93.3056 17.4251 92.6036 17.1299 92.109 16.5484C91.6113 15.9639 91.3591 15.1307 91.3591 14.072C91.3591 12.9798 91.6113 12.1249 92.1092 11.5302C92.6042 10.9393 93.2994 10.6395 94.1759 10.6395C95.0264 10.6395 95.7034 10.9259 96.1884 11.4912C96.6758 12.0594 96.9232 12.9074 96.9232 14.0124C96.9232 15.1309 96.6906 15.9901 96.2319 16.5649C95.7764 17.1353 95.0914 17.4251 94.1959 17.4251ZM94.3049 8.63355C92.6064 8.63355 91.2573 9.13125 90.2954 10.1128C89.3341 11.0945 88.8467 12.4531 88.8467 14.1511C88.8467 15.7638 89.3225 17.0611 90.2609 18.0061C91.1994 18.9515 92.4765 19.4304 94.0565 19.4304C95.703 19.4304 97.0252 18.9258 97.9867 17.9306C98.9481 16.9365 99.4351 15.5908 99.4351 13.9325C99.4351 12.2945 98.9781 10.9876 98.0763 10.0488C97.174 9.10962 95.9049 8.63355 94.3049 8.63355ZM84.892 8.63355C83.7366 8.63355 82.7809 8.92908 82.0508 9.51177C81.3163 10.0979 80.9437 10.8667 80.9437 11.797C80.9437 12.2806 81.0241 12.7101 81.1823 13.0745C81.3416 13.44 81.588 13.7618 81.9154 14.0319C82.2402 14.2999 82.7417 14.5805 83.4063 14.866C83.965 15.0959 84.3816 15.2904 84.6462 15.4436C84.9049 15.5938 85.0885 15.7448 85.1922 15.8919C85.2929 16.0358 85.344 16.2327 85.344 16.4758C85.344 17.1678 84.8258 17.5045 83.7594 17.5045C83.3639 17.5045 82.9127 17.4219 82.4185 17.2591C81.9278 17.0987 81.4646 16.8639 81.0453 16.5628L80.9434 16.4898V18.8513L80.9808 18.8687C81.3279 19.0289 81.7655 19.164 82.2812 19.2703C82.796 19.3767 83.2637 19.4309 83.67 19.4309C84.9237 19.4309 85.9334 19.1339 86.6701 18.5477C87.4115 17.9576 87.7872 17.1706 87.7872 16.2082C87.7872 15.5138 87.5849 14.9184 87.1862 14.4382C86.7903 13.9619 86.103 13.5247 85.1445 13.1382C84.3808 12.8317 83.8916 12.5772 83.6897 12.3819C83.4952 12.1932 83.3964 11.9264 83.3964 11.5884C83.3964 11.2889 83.5183 11.0489 83.7687 10.8546C84.0209 10.6592 84.3721 10.5599 84.8125 10.5599C85.2212 10.5599 85.6393 10.6245 86.0552 10.751C86.4707 10.8775 86.8357 11.0469 87.1404 11.2542L87.2406 11.3227V9.08255L87.2021 9.06603C86.921 8.94549 86.5504 8.84234 86.1002 8.75865C85.6521 8.6755 85.2456 8.63355 84.892 8.63355ZM74.5492 17.4251C73.6592 17.4251 72.957 17.1299 72.4625 16.5484C71.9647 15.9639 71.7129 15.1309 71.7129 14.072C71.7129 12.9798 71.965 12.1249 72.463 11.5302C72.9576 10.9393 73.6526 10.6395 74.5296 10.6395C75.3797 10.6395 76.0568 10.9259 76.5419 11.4912C77.0294 12.0594 77.2766 12.9074 77.2766 14.0124C77.2766 15.1309 77.0439 15.9901 76.5852 16.5649C76.1297 17.1353 75.4451 17.4251 74.5492 17.4251ZM74.6586 8.63355C72.9596 8.63355 71.6104 9.13125 70.6491 10.1128C69.6878 11.0945 69.2001 12.4531 69.2001 14.1511C69.2001 15.7645 69.6762 17.0611 70.6146 18.0061C71.553 18.9515 72.8301 19.4304 74.4101 19.4304C76.0563 19.4304 77.3789 18.9258 78.3404 17.9306C79.3015 16.9365 79.7888 15.5908 79.7888 13.9325C79.7888 12.2945 79.3317 10.9876 78.4296 10.0488C77.5272 9.10962 76.2583 8.63355 74.6586 8.63355ZM65.4768 10.6655V8.88169H63.0538V19.1821H65.4768V13.913C65.4768 13.0171 65.6799 12.281 66.0807 11.7251C66.4765 11.1757 67.0039 10.8974 67.6478 10.8974C67.866 10.8974 68.111 10.9334 68.3763 11.0045C68.6389 11.0753 68.8291 11.1521 68.9413 11.233L69.0431 11.3068V8.86408L69.0039 8.84723C68.7783 8.75137 68.459 8.703 68.0551 8.703C67.4462 8.703 66.9014 8.89864 66.4346 9.28385C66.025 9.62242 65.7289 10.0866 65.5025 10.6655H65.4768ZM58.7147 8.63355C57.6031 8.63355 56.6117 8.87191 55.7683 9.34178C54.9232 9.81274 54.2697 10.4851 53.825 11.3401C53.3823 12.193 53.1575 13.1892 53.1575 14.3003C53.1575 15.2735 53.3755 16.1666 53.8062 16.9538C54.2372 17.7422 54.8472 18.3591 55.6193 18.7869C56.3904 19.2141 57.2815 19.4308 58.2682 19.4308C59.4197 19.4308 60.4028 19.2005 61.191 18.7465L61.2229 18.7283V16.5085L61.1211 16.5828C60.764 16.8429 60.365 17.0505 59.9357 17.2001C59.5074 17.3495 59.117 17.4251 58.7746 17.4251C57.8239 17.4251 57.0607 17.1276 56.5067 16.5411C55.9515 15.9538 55.67 15.1292 55.67 14.0915C55.67 13.0473 55.9635 12.2015 56.5421 11.5774C57.1189 10.9551 57.8836 10.6395 58.8146 10.6395C59.611 10.6395 60.3871 10.9091 61.1213 11.4417L61.2229 11.5155V9.17657L61.1901 9.15809C60.9138 9.00342 60.5369 8.87571 60.0691 8.77887C59.6033 8.68224 59.1476 8.63355 58.7147 8.63355ZM51.4888 8.8818H49.0659V19.1821H51.4888V8.8818ZM50.3021 4.49381C49.9033 4.49381 49.5555 4.62956 49.2698 4.89858C48.9828 5.16835 48.8373 5.50801 48.8373 5.90886C48.8373 6.30341 48.9811 6.63688 49.2653 6.89948C49.5477 7.16132 49.8966 7.29403 50.3022 7.29403C50.7078 7.29403 51.058 7.16132 51.3437 6.89991C51.6313 6.63688 51.7772 6.30352 51.7772 5.90886C51.7772 5.52203 51.6352 5.18585 51.3556 4.90944C51.0761 4.63358 50.7216 4.49381 50.3021 4.49381ZM44.2567 8.12183V19.1821H46.7294V4.80912H43.3071L38.957 15.4849L34.7355 4.80912H31.1738V19.182H33.4975V8.12074H33.5773L38.0351 19.1821H39.7887L44.1769 8.12183H44.2567Z" fill="#4B5563" />
                                <path d="M11.3983 11.4044H0V0.00610352H11.3983V11.4044Z" fill="#4B5563" />
                                <path d="M23.983 11.4044H12.585V0.00610352H23.983V11.4044Z" fill="#4B5563" />
                                <path d="M11.3979 23.9938H0V12.5956H11.3979V23.9938Z" fill="#4B5563" />
                                <path d="M23.983 23.9938H12.585V12.5956H23.983V23.9938Z" fill="#4B5563" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
                    <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                        <img src="https://cdn.tuk.dev/assets/adidas-dark.png" alt='com1' />
                    </div>
                    <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
                        <img src="https://cdn.tuk.dev/assets/channel-dark.png" alt='cm2' />
                    </div>
                    <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
                        <img src="https://cdn.tuk.dev/assets/nike-dark.png" alt='' />
                    </div>
                    <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
                        <img src="https://cdn.tuk.dev/assets/toyota-dark.png" alt='' />
                    </div>
                    <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                        <img src="https://cdn.tuk.dev/assets/gs1-dark.png" alt='' />
                    </div>
                    <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                        <img src="https://cdn.tuk.dev/assets/berry-dark.png" alt='' />
                    </div>
                    <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                        <img src="https://cdn.tuk.dev/assets/min-dark.png" alt='' />
                    </div>
                    <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                        <img src="https://cdn.tuk.dev/assets/honda-dark.png" alt='' />
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Company;