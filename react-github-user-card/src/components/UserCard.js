import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


class UserCard extends React.Component {
  constructor(){
    super();

  }
  selectUser(e,user){
    //e.preventDefault();
     this.props.selectUser(user.login);
  }
  render(){
    var cardContent, cardAction;

    switch(this.props.type){
      case 'follower': 
        cardContent = <></>;
        cardAction = 
          <CardActions>
            <a style={{marginLeft:'auto'}} href={this.props.user.html_url}>Github Page </a>
          </CardActions>;
          break;
      case 'user':
        cardContent = 
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="h3">
              Email: {this.props.user.email ? this.props.user.email : 'No email provided'}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="h3">
              Location: {this.props.user.location ? this.props.user.location : 'No location provided'}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="h3">
              Company: {this.props.user.company ? this.props.user.company : 'No Company provided'}
            </Typography>
            <Typography className='bio' variant="body2" color="textSecondary" component="p">
              {this.props.user.bio ? this.props.user.bio : 'This user has no bio'}
            </Typography>
          </CardContent>;
          cardAction = 
            <CardActions>
              <a style={{marginLeft:'auto'}} href={this.props.user.html_url}>Github Page </a>
            </CardActions>;
            break;
      case 'search':
        cardContent = <></>;
        cardAction = <Link to={`/users/${this.props.user.login}`} onClick={(e)=>{
          this.selectUser(e,this.props.user)
        }}>See More</Link>;
        break;
    }
    return(
      <Card className='card'>
        <CardHeader
          avatar={
            <Avatar aria-label="avatar" className='avatar' src={this.props.user.avatar_url}/>
          }
          title={this.props.user.name}
          subheader={this.props.user.login}
        />
        {cardContent}
        {cardAction}
      </Card>
    );
  }
}

export default UserCard;