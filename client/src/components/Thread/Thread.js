import React from "react";
import Paper from "@material-ui/core/Paper";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import Post from "../Cards/post";
import Reply from "./reply";
import { getAllThreadPosts} from "../../utils/API/dbAPI";

class Thread extends React.Component {
  
    state={
        userId:this.props.user ? this.props.user.id:null,
        threadId:this.props.threadId,
        Posts:[],
        expanded:false
    }

    componentDidMount = () => {
        console.log(this.props.user);
        this.loadPosts();
    }

    componentWillReceiveProps (newProps){
        console.log(newProps);
        this.setState({
            userId: newProps.user ? parseInt(newProps.user.id):null
        },console.log(this.state));
    }
    
    loadPosts = () => 
      getAllThreadPosts(this.props.threadId)
      .then(res=>{         
          this.setState(res.data);
          //console.log(this.state,"STATE");
      });

    handleEdit = event => {
        event.preventDefault();
        //console.log(this.state.Posts);
        this.setState({
            toEdit:this.state.Posts.find(post => post.id===parseInt(event.target.id)),
            expanded:true
        },console.log(this.state.expanded))
    }

    expandToggle = () => this.setState({expanded:!this.state.expanded});

    render() {
        return (
            <Paper elevation={3} className="left-feed">
               
                <Typography className="thread-title" variant="display1">{this.state.title}</Typography>
                {this.state.Posts.map(post => Post({post:post,userId:this.state.userId,editCallback:this.handleEdit}))}
                {this.state.userId && <ExpansionPanel expanded={this.state.expanded}>
                    <ExpansionPanelSummary 
                    expandIcon={<ExpandMoreIcon onClick={this.expandToggle}/>}> 
                    <Typography>Reply</Typography>                       
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <Reply toEdit={this.state.toEdit} threadId={this.state.threadId} userId={this.state.userId}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>}
            </Paper>
        );

    }
}
export default Thread;