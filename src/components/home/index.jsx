/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from "react-redux";
import { useState } from "react";
import { fetchData } from "../../utils/redux/action";
import { useEffect } from "react";
import { EntryCard } from "../entries/entry-card/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import EntryFormModel from "../shared/entry-form-model/EntryFormModel";
import ConfirmDeleteModel from "../shared/delete-model/ConfirmDeleteModel";
import "./style.css";
import { useAuth0 } from "@auth0/auth0-react";

function Home(props) {
  const { data, fetchData } = props;
  const entries = data.data;
  const [showEntryModel, setShowEntryModel] = useState(false);
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [selectedEntryData, setSelectedEntryData] = useState();
  const [selectedIndex, setSelectedIndex] = useState();
  const [seeMore, setSeeMore] = useState(12);
  const { isAuthenticated } = useAuth0();

  const handleCloseEntryModel = () => {
    setShowEntryModel(false);
    setSelectedEntryData(undefined);
  };

  const handleCloseDeleteModel = () => {
    setShowDeleteModel(false);
  };

  const handleShowEntryModel = () => setShowEntryModel(true);
  const handleShowDeleteModel = () => setShowDeleteModel(true);

  const handleSelectEntry = (entry) => setSelectedEntryData(entry);
  const handleSelectIndex = (index) => setSelectedIndex(index);
  
  useEffect(() => {
    if (isAuthenticated) fetchData();
  }, [isAuthenticated]);

  const result = entries.slice(0, seeMore).map((item, index) => {
    return (
      <Col xs="auto" md="auto">
        <EntryCard
          key={index}
          index={index}
          handleSelectEntry={handleSelectEntry}
          handleShowEntryModel={handleShowEntryModel}
          handleShowDeleteModel={handleShowDeleteModel}
          entry={item}
          handleSelectIndex={handleSelectIndex}
        />
      </Col>
    );
  });

  return data.loading ? (
    <div className="spinnerContainer">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  ) : isAuthenticated ? (
    <Container className="container">
      <Button className="button" onClick={handleShowEntryModel}>
        AddNew
      </Button>
      <Row className="row">{result}</Row>
      <Button className="button" onClick={() => setSeeMore(seeMore + 10)}>
        seeMore
      </Button>
      <EntryFormModel
        show={showEntryModel}
        selectedEntryData={selectedEntryData}
        handleClose={handleCloseEntryModel}
      />
      <ConfirmDeleteModel
        handleClose={handleCloseDeleteModel}
        show={showDeleteModel}
        handelDeleteElement={(index) => props.deleteElement(index)}
        selectedIndex={selectedIndex}
      />
    </Container>
  ) : (
    <div className="spinnerContainer">
      <span >Login To View Our Data</span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
