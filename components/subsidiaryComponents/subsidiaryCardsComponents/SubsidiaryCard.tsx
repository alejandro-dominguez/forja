import type { Subsidiary } from '../SubsidiaryCardsMd';

const SubsidiaryCard = (sub: Subsidiary) => {
    const { id, date, description, image, title, type} = sub
    
    return (
        <div>
            SubsidiaryCard
        </div>
    )
}

export default SubsidiaryCard;
