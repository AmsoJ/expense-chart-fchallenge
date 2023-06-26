import './evaluation.scss';

function Evaluation() {
    return <div className="evaluation border-top d-flex align-items-end justify-content-between">
        <article className="total-present">
            <p className="total-text"><small>Total this month</small></p>
            <h3 className="total-amount">$478.83</h3>
        </article>
        <article className="total-past text-end">
            <h6 className="total-amount">2.4%</h6>
            <p className="total-text"><small>From last month</small></p>
        </article>
    </div>
}

export default Evaluation;