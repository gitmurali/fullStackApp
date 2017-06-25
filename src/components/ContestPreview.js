import React from "react";
import Reorder from 'react-icons/md/reorder';

const ContestPreview = (contest) => {
    return (
        <div className="ContestPreview">
            <div className="category-name">
                <Reorder/> {contest.categoryName}
            </div>
            <div className="contest-name">
                {contest.contestName}
            </div>
        </div>
    );
}

export default ContestPreview;