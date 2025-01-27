import React, {useState} from 'react'

const LoanCal = ()=>{
    const [loanAmount, setLoanAmount] = useState(14500000);
    const [loanPeriod, setLoanPeriod] = useState(12);

    const maxFunding = 17484500
    const maxAmount = 17480000
    const minAmount = 1000000
    const minPeriod = 6
    const maxPeriod = 18

    const loanCalculator = ()=>{
        return Math.round(loanAmount/loanPeriod)
    }
    return(
        <div className='outer'>
            <div>
                <h1>Loan Calculator</h1>
            </div>
            <div className='inner'>
                <h5>Maxmimum Funding</h5>
                <h2>Rp {maxFunding}</h2>
                <div className='innerSub'>
                <h4>Honda ADV 150 CBS</h4>
                <h6>2022</h6>
                </div>
            </div>
            <div className='inner1'>
                <div className='inner1sub'>
                <label>Loan Amount</label>
                <h3>Rp {loanAmount}</h3>
                </div>
                <input
                type = 'range'
                min = {minAmount}
                max = {maxAmount}
                step = {500000}
                value = {loanAmount}
                onChange = {(e)=>setLoanAmount(e.target.value)}
                />
                <div className='inner1Sub'>
                    <p>1000000</p>
                    <p>17480000</p>
                </div>
            </div>
            <div className='inner2'>
                <div className='inner2sub'>
                <label>Loan Period</label>
                <h3>{loanPeriod} Months</h3>
                </div>
                <input
                type = 'range'
                min = {minPeriod}
                max = {maxPeriod}
                step = {1}
                value = {loanPeriod}
                onChange = {(e)=>setLoanPeriod(e.target.value)}
                />
                <div className='inner1Sub'>
                    <p>6 Months</p>
                    <p>18 Months</p>
                </div>
            </div>
            <div className='inner3'>
                <h5>Estimated Monthly installments</h5>
                <h2>Rp {loanCalculator()}</h2>
                <p className='inner3txt'>Installment fees may change according to the results of the verification of the physical condition of the vehicle of
                the branch office</p>
                <div >
                <button className='apply-btn' onClick={console.log(loanCalculator())}>Apply Loan</button>
            </div>
            </div>
            
        </div>
    )

}

export default LoanCal