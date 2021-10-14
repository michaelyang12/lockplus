import HistoryIcon from "../../.next/assets/icons/HistoryIcon";

function HistoryBar(props) {
    return (
        <a href="#" class="text-white flex items-center space-x-2 px-4 ml-1 hover:text-lockplus-hoverGray">
          <HistoryIcon/>
          <span class="text-lg font-bold font-lockplus">
              history
            </span>
        </a>
    );
}

export default HistoryBar;