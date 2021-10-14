import SettingsIcon from "../../.next/assets/icons/SettingsIcon";


function SettingsBar(props) {
        // const {
        //     componentType, // eslint-disable-line
        //     componentClass: Component,
        //     disabled,
        //     expanded,
        //     onToggle, // eslint-disable-line
        //     onSelect,
        //     className,
        //     children,
        //     ...props
        // } = this.props;
        return (
            <a href="#" class="text-white flex items-center space-x-2 px-4 ml-1 hover:text-lockplus-hoverGray">
                <SettingsIcon/>
                <span class="text-lg font-bold font-lockplus">
                    settings
                </span>
            </a>
        );
}

export default SettingsBar;