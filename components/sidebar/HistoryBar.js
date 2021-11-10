import HistoryIcon from "../assets/icons/HistoryIcon";
import { useRouter } from 'next/router';

function HistoryBar(props) {
    const router = useRouter();
    return (
        <a href="#" class="text-white flex items-center space-x-2 px-4 ml-1 hover:text-lockplus-hoverGray"
          onClick = {() => router.push('/history')}>
          <HistoryIcon/>
          <span class="text-md font-md font-lockplus">
              history
            </span>
        </a>
    );
}

export default HistoryBar;