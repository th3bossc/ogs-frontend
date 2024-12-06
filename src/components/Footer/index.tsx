import HighLightText from "../HighLightText";

const Footer = () => {
    return (
        <footer className="h-full w-full min-h-[50dvh] border border-x-0 border-top-[1px] border[#828282] flex p-4 md:p-8 lg:p-10 gap-4 lg:gap-8">
            <div className="w-full h-inherit">
                <HighLightText className="text-xl lg:text-4xl mb-4 lg:mb-8"> ABOUT US </HighLightText>
                <span className="font-bold text-lg lg:text-2xl text-[#828282]">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »
                </span>
            </div>
            <div className="w-1/2 lg:w-2/5 h-inherit flex items-start justify-center flex-col gap-4 lg:gap-8">
                <div className="h-full w-full">
                    <HighLightText className="text-xl lg:text-4xl mb-4 lg:mb-8"> CONTACT US </HighLightText>
                </div>
                <div className="h-full w-full">
                    <HighLightText className="text-xl lg:text-4xl mb-4 lg:mb-8"> FOLLOW US ON </HighLightText>
                </div>
            </div>
        </footer>
    )
}

export default Footer;