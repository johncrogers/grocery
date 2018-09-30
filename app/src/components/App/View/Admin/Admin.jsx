import React from "react";
import { Table } from "semantic-ui-react";
import api from "./../../../../resources/api.js";
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: "users",
      data: []
    };
    this.getData = this.getData.bind(this);
    this.postData = this.postData.bind(this);
    this.patchData = this.patchData.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.buildResultRowTemplate = this.buildResultRowTemplate.bind(this);
    this.buildOptionsButtons = this.buildOptionsButtons.bind(this);
  }
  getData(endpoint, params, query) {
    api
      .getRequest(endpoint, params, query)
      .then(response => {
        console.log(`GET Success:`, response);
        console.log(`data:`, response.data);
        this.setState({ data: response.data }, () => {});
      })
      .catch(err => {
        console.log(`GET ERROR:`, err);
      });
  }
  postData(endpoint, body) {
    api
      .postRequest(endpoint, body)
      .then(response => {
        console.log(`POST Success:`, response);
        this.getData(this.state.endpoint);
      })
      .catch(err => {
        console.log(`POST ERROR:`, err);
      });
  }
  patchData(endpoint, body) {
    api
      .patchRequest(endpoint, body)
      .then(response => {
        console.log(`PATCH Success:`, response);
        this.getData(this.state.endpoint);
      })
      .catch(err => {
        console.log(`PATCH ERROR:`, err);
      });
  }
  deleteData(endpoint, body) {
    api
      .deleteRequest(endpoint, body)
      .then(response => {
        console.log(`DELETE Success:`, response);
        this.getData(this.state.endpoint);
      })
      .catch(err => {
        console.log(`DELETE ERROR:`, err);
      });
  }
  buildResultRowTemplate(result) {
    return (
      <Table.Row>
        {Object.keys(result).map(column => {
          columnCount++;
          return <Table.Cell>{result[column]}</Table.Cell>;
        })}
        <Table.Cell>{this.buildOptionsButtons(result)}</Table.Cell>
      </Table.Row>
    );
  }
  buildOptionsButtons(result) {
    return (
      <div>
        <button
          onClick={() => {
            let body = {
              query: {
                target: "id",
                matcher: "=",
                value: result.id
              },
              change: {
                target: "username",
                value: "Changed Name"
              }
            };
            this.patchData(this.state.endpoint, body);
          }}
        >
          PATCH
        </button>
        <button
          onClick={() => {
            let body = {
              data: { query: { target: "id", matcher: "=", value: result.id } }
            };
            this.deleteData(this.state.endpoint, body);
          }}
        >
          DELETE
        </button>
      </div>
    );
  }
  componentDidMount() {
    this.getData(this.state.endpoint);
  }
  render() {
    console.log(`Render Admin`, this.props);
    return (
      <Table id="Admin" striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <button
                onClick={() => {
                  let body = {
                    username: "Clint",
                    password: "12345"
                  };
                  this.postData(this.state.endpoint, body);
                }}
              >
                POST
              </button>
              <button
                onClick={() => {
                  this.getData(this.state.endpoint);
                }}
              >
                GET
              </button>
              <button
                onClick={() => {
                  console.log(this.state);
                }}
              >
                State
              </button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.state.data.map(result => {
            return this.buildResultRowTemplate(result);
          })}
        </Table.Body>
      </Table>
    );
  }
}
export default Admin;
