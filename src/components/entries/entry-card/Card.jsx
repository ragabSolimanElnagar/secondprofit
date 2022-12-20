import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import "./style.css";
import CardGroup from "react-bootstrap/CardGroup";

export function EntryCard(props) {
  const {
    entry,
    index,
    handleSelectEntry,
    handleShowEntryModel,
    handleShowDeleteModel,
    handleSelectIndex,
  } = props;

  return (
    <>
      <Card className="card">
        <dev className="header">
          <Card.Title>{entry.API}</Card.Title>
          <Dropdown className="dropMenu">
            <Dropdown.Toggle className="toggleButton" id="dropdown-basic" />
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  handleSelectEntry({ entry, index });
                  handleShowEntryModel();
                }}
              >
                Update
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleSelectIndex(index);
                  handleShowDeleteModel();
                }}
              >
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </dev>
        <Card.Body>
          <CardGroup className="group">
            <Card.Subtitle>Category:</Card.Subtitle>
            <Card.Text className="groupValue">{entry.Category}</Card.Text>
          </CardGroup>
          {entry.Auth && (
            <CardGroup className="group">
              <Card.Subtitle>Auth:</Card.Subtitle>
              <Card.Text className="groupValue">{entry.Auth}</Card.Text>
            </CardGroup>
          )}
          <CardGroup className="group">
            <Card.Subtitle>Cors:</Card.Subtitle>
            <Card.Text className="groupValue">{entry.Cors}</Card.Text>
          </CardGroup>
          {entry.HTTPS && (
            <CardGroup className="group">
              <Card.Subtitle>HTTPS:</Card.Subtitle>
              <Card.Text className="groupValue">{`${entry.HTTPS}`}</Card.Text>
            </CardGroup>
          )}
          <CardGroup>
            <Card.Subtitle>Description:</Card.Subtitle>
            <Card.Text className="cardText">{entry.Description}</Card.Text>
          </CardGroup>
          <CardGroup>
            <Card.Subtitle>API:</Card.Subtitle>

            <Card.Link className="link" href={entry.Link}>
              {entry.Link}
            </Card.Link>
          </CardGroup>
        </Card.Body>
      </Card>
    </>
  );
}

export default Card;
