import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Card, { CardHeader, CardContent } from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const Subforum = subForum => (
    <Link to={`/forum/${subForum.id}`}>
        <Card>
            <CardHeader
                avatar={
                <Avatar>
                    {subForum.category[0]}
                </Avatar>
                }
                title={subForum.updatedAt}
                subheader={`${subForum.threadCount} Threads`}
            />
            <CardContent>        
            <Typography variant="display1">{subForum.category}</Typography>

            </CardContent>
        </Card>
    </Link>
    );

export default Subforum;