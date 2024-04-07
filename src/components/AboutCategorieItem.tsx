
import '../assets/about/Categories.css';

interface aboutCategorieItemProps {
    timeLapse: string[],
    position: string,
    companyName: string,
    bulletPoints: string[]

}

const timeLapse = (timeLapse) => {
    if (timeLapse.length == 2) {
        return(
            <>
                            
                {timeLapse[1]}<br/>
                -<br/>
                {timeLapse[0]}
            </>
        )
    } else {
        return(
            <>
                {timeLapse[0]}
            </>
        )
    }
}

function AboutCategorieItem(props: aboutCategorieItemProps) {
    return (
        <div className='aboutCategorieItemContainer'>
            <div className='aboutCategorieItemTimeLapse'>
                {
                    timeLapse(props.timeLapse)
                }
                
            </div>
            <div className='aboutCategorieItemDescription'>
                <div className='aboutCategorieItemPosition'>
                    {props.position}
                </div>
                <div className='aboutCategorieItemCompanyName'>
                    {props.companyName}
                </div>
                <div className='aboutCategorieItemBulletedList'>

                    
                    {
                        props.bulletPoints.map((point) =>{
                            return(
                                <div>
                                    • {point}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutCategorieItem;