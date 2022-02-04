import React from 'react';
import { connect } from 'react-redux';
import RemoveModal from './RemoveModal';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  state = {
    modalOpen: false
  };

  componentDidMount() {
    this.setState({ modalOpen: true });
    setTimeout(() => {
      this.setState({ modalOpen: false });
    }, 50)
  }

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onClick = () => {
    this.setState(() => ({ modalOpen: true }));
  };
  onRemove = () => {
    this.handleClearRemoveModal();
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  handleClearRemoveModal = () => {
    this.setState(() => ({ modalOpen: false }));
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
            history={this.props.history}
          />
          <button className=" button button--secondary" onClick={this.onClick}>Remove Expense</button>
        </div>
        <RemoveModal
          onClick={this.onClick}
          modalOpen={this.state.modalOpen}
          onRemove={this.onRemove}
          handleClearRemoveModal={this.handleClearRemoveModal}
        />
      </div>
    )
  }
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
//export default connect(mapStateToProps)(EditExpensePage);