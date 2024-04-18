import React from 'react'
import dottedLine from "../assets/dottedLine.svg"

const Tokenomics = () => {
  return (
    <>
        <section className='tokenomics--section'>
            <div className='heading'>
                <h2>
                    TOKENOMICS:
                </h2>
            </div>
            <div className='tokenomics--card'>
                <div className='bar i'>
                    <div className='label'>
                        <p>
                            Total Token Supply
                        </p>
                    </div>
                    <div className='details'>
                        <p>
                            10 billion $SIK tokens.
                        </p>
                    </div>
                </div>
                <div className='bar ii'>
                    <div className='label'>
                        <p>
                            Distribution
                        </p>
                    </div>
                    <div className='details center'>
                        <p>
                            40% allocated to Airdrop
                        </p>
                        <p>
                            20% Allocated to Interested presale participants 
                        </p>
                        <p>
                            30% added to liquidity pool (LP)
                        </p>
                        <p>
                            10% for fun & user participation rewards
                        </p>
                    </div>
                </div>
                <div className='bar iii flat'>
                    <p>
                        Tokenomics remain simple with no complex mechanisms.
                    </p>
                </div>
            </div>
            <div className='spacer sliced'>
            </div>
            <div className='use-cases'>
                <p>
                    Use cases
                </p>
                <ul>
                    <li>
                        $SIK token can be used for tipping, Defi, or any other fun activities within the Solana community.
                    </li>
                    <li>
                        No specific utility or use case beyond entertainment value.
                    </li>
                </ul>
            </div>
            <div className='spacer sliced'>
            </div>
            
        </section>
    </>
  )
}

export default Tokenomics