import React, {useState} from 'react';
import StyledButton from "../components/Styled/StyledButton";
import AddEditGamesForm from "../components/AddEditGamesForm";

const AddEditGamesPage = () => {
    const[mode, setMode] = useState(0)

    const onClick = (e) => {

        setMode(e.target.value)

    }

    const gamesPageButtonSx = {
        marginRight: 3,
        marginTop: 3,
        borderRadius: 3,

    }

    return (
        <>
            {
                mode==0?
                <>
                    <StyledButton text={"Add Games"}
                                  onClick={onClick}
                                  sx={gamesPageButtonSx}
                                  value={1}
                                  color={"success"}
                                  icon={"+"}
                    />

                    <StyledButton
                        text={"Edit Games"}
                        onClick={onClick}
                        sx={gamesPageButtonSx}
                        value={2}
                        color={"warning"}
                        icon={"/"}
                    />
                </>
                :
                <AddEditGamesForm mode={mode}/>
            }



        </>
    )
};

export default AddEditGamesPage;