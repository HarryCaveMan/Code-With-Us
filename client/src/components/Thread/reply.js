import React from "react";
import Avatar from "material-ui/Avatar";
import Card, {CardHeader,CardContent} from "material-ui/Card";
import TextField from 'material-ui/TextField';
import Markdown from "react-markdown";
import CodeBlock from "./code-block";
import Button from "material-ui/Button";
import { createPost} from "../../utils/API/dbAPI";


class Reply extends React.Component {
    state = {
        input : ""
    } 
    
    inputHandler = event => {
      this.setState({ input: event.target.value });
      console.log(this.state.input);
      
    }

    formSubmit = event => {
        createPost(this.state.input,this.props.threadId,1);
    }
    
    render () {return(
    <form className="reply-form" onSubmit={this.formSubmit}>   
    <Card className="reply-card">
        <CardHeader className="post-submit"
            avatar={
            <Avatar aria-label="Code With Us">
                C
            </Avatar>
            }
            title={
                <Button type="submit"  variant="raised" color="primary" >
                Post
              </Button>
            }
            subheader="May 2, 2018"
        />
        <CardContent>            
            <TextField
                multiline
                hintText="Full width"
                fullWidth={true}
                onChange={this.inputHandler}
            />       
            <Markdown
                source={this.state.input} 
                renderers={{code:CodeBlock.Block,inlineCode:CodeBlock.InLine}}
            /> 
        </CardContent>
    </Card>
    </form>
    );}
  }
export default Reply;