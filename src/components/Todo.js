/**
 * Created by bruce on 2017/1/20.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Card, Checkbox, Button} from 'antd';

export default class Todo extends React.Component {
    onMouseOver = () => {
        ReactDOM.findDOMNode(this.refs.del).style.display = 'inline-block';
    };
    onMouseOut = () => {
        ReactDOM.findDOMNode(this.refs.del).style.display = 'none';
    };

    render() {
        return (
            <Card
                style={{
                    marginTop: 8,
                    height: 60,
                }}
                bodyStyle={{padding: 10}}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}>
                <Checkbox
                    style={
                        {
                            textDecoration: this.props.completed ? 'line-through' : 'none',
                            fontSize: 16,
                            marginTop: 7
                        }
                    }
                    checked={this.props.completed}
                    onChange={() => this.props.onToggleTodo()}>
                    {this.props.text}
                </Checkbox>
                <Button
                    ref='del'
                    type='default'
                    style={{
                        float: 'right',
                        height: 30,
                        marginTop: 5,
                        display: 'none'
                    }}
                    onClick={() => this.props.onDeleteTodo()}>
                    删除
                </Button>
            </Card>
        );
    }
}

Todo.propTypes = {
    onToggleTodo: React.PropTypes.func.isRequired,
    onDeleteTodo: React.PropTypes.func.isRequired,
    completed: React.PropTypes.bool.isRequired,
    text: React.PropTypes.string.isRequired,
};