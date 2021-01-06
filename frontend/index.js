import React from 'react';
import {initializeBlock, Button, CollaboratorToken, useBase} from '@airtable/blocks/ui';
import {session} from '@airtable/blocks';


const ButtonHappyBox = () => (
    <Button onClick={() => console.log("HappyBox")} icon="edit">
      Donne moi du bonheur
    </Button>
  );

  const ButtonReboost = () => (
    <Button onClick={() => console.log("Reboost")} icon="edit">
      Donne moi un coup de boost
    </Button>
  );

const CollaboratorTokenExample = () => {
    const base = useBase();
    const currentCollaborator = base.activeCollaborators.find(collaborator => (collaborator.name === session?.currentUser?.name));

    return (
    <>Hey
        <CollaboratorToken
            key={currentCollaborator.id}
            collaborator={currentCollaborator}
            marginRight={1}
        /> 
    </>
    );
};

function InstaReboost() {
    // YOUR CODE GOES HERE
    return <><CollaboratorTokenExample /><ButtonHappyBox /><ButtonReboost /></>;
}

initializeBlock(() => <InstaReboost />);
