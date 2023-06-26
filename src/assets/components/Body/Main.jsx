import Chart from '../Chart/Chart';
import Evaluation from '../Evaluation/Evaluation';
import './main.scss';

function Main() {
    return <main className="body mt-4 rounded-4 p-4">
        <h2 className="title">
            Spending - Last 7 days
        </h2>
        <Chart />
        <Evaluation />
    </main>
}

export default Main;