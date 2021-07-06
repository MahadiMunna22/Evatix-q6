import "./App.css";
import Avatar from "./Components/Avatar/Avatar";
import Tooltip from "@atlaskit/tooltip";
import { Button, LoadingButton, ButtonGroup } from "./Components/Button/Button";
import { AiFillSlackCircle } from "react-icons/ai";
import { SimpleTag as Tag, TagGroup } from "./Components/Tag/Tag";

function App() {
  const presence = "offline";
  const name = "Mike Cannon-Brookes";
  const label = `${name} (${presence})`;
  return (
    <div className="container App">
      {/* Button test */}
      {/* <Button>Default button</Button>
      <Button appearance="primary">Primary button</Button>
      <Button appearance="subtle">Subtle button</Button>
      <Button appearance="link">Link button</Button>
      <Button appearance="subtle-link">Subtle link button</Button>
      <Button appearance="warning">Warning button</Button>
      <Button appearance="danger">Danger button</Button>
      <Button appearance="primary" isDisabled>
        Disabled button
      </Button>
      <Button isSelected>Selected button</Button>
      <LoadingButton appearance="primary" isLoading>
        Loading button
      </LoadingButton>
      <ButtonGroup>
        <Button appearance="primary">Default</Button>
        <Button appearance="primary" spacing="compact">
          Compact
        </Button>
        <Button spacing="none" appearance="subtle-link">
          None
        </Button>
      </ButtonGroup>
      <Button shouldFitContainer appearance="primary">
        Full width button
      </Button>
      <Button iconBefore={<AiFillSlackCircle />} appearance="primary">
        Icon after
      </Button>
      <Button iconAfter={<AiFillSlackCircle />} appearance="primary">
        Icon after
      </Button> */}

      {/* Avatar Test */}
      {/* <Avatar />
      <Avatar
        appearance="circle"
        src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
        size="large"
        name="John Doe"
      />
      <Avatar
        appearance="square"
        size="medium"
        src="https://hello.atlassian.net/secure/projectavatar?pid=30630"
        name="Rocket image"
      />

      <Avatar size="xxlarge" />
      <Avatar size="xxlarge" appearance="square" />

      <Avatar size="xlarge" />
      <Avatar size="xlarge" appearance="square" />

      <Avatar size="large" />
      <Avatar size="large" appearance="square" />

      <Avatar size="medium" />
      <Avatar size="medium" appearance="square" />

      <Avatar size="small" />
      <Avatar size="small" appearance="square" />

      <Avatar size="xsmall" />
      <Avatar size="xsmall" appearance="square" />

      <Tooltip content={label}>
        <Avatar
          name={name}
          src="https://pbs.twimg.com/profile_images/568401563538841600/2eTVtXXO_400x400.jpeg"
          size="large"
          onClick={console.log}
          presence={presence}
          label={label}
        />
      </Tooltip> */}

      {/* Tag Test */}

      <Tag text="Tag" />
      <Tag text="Tag link" href="/components/tag" />
      <Tag text="Removable tag" removeButtonLabel="Remove" />
      <Tag
        text="Removable tag link"
        removeButtonLabel="Remove"
        href="/components/tag"
      />
      <Tag
        appearance="rounded"
        removeButtonLabel="Remove"
        text="Round removeable tag"
        elemBefore={<Avatar borderColor="transparent" size="xsmall" />}
      />
      <Tag
        appearance="rounded"
        removeButtonLabel="Remove"
        text="Round removeable link"
        href="/components/tag"
        elemBefore={<Avatar borderColor="transparent" size="xsmall" />}
      />
      <TagGroup>
        <Tag text="standard Tag" color="standard" />
        <Tag text="blue Tag" color="blue" />
        <Tag text="green Tag" color="green" />
        <Tag text="teal Tag" color="teal" />
        <Tag text="purple Tag" color="purple" />
        <Tag text="red Tag" color="red" />
        <Tag text="yellow Tag" color="yellow" />
        <Tag text="grey Tag" color="grey" />
        <Tag text="greenLight Tag" color="greenLight" />
        <Tag text="tealLight Tag" color="tealLight" />
        <Tag text="blueLight Tag" color="blueLight" />
        <Tag text="purpleLight Tag" color="purpleLight" />
        <Tag text="redLight Tag" color="redLight" />
        <Tag text="yellowLight Tag" color="yellowLight" />
        <Tag text="greyLight Tag" color="greyLight" />
      </TagGroup>
      <Tag text="Croissant tiramisu gummi bears." />
    </div>
  );
}

export default App;
