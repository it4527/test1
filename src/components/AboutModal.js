import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

export default class AboutModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        };

    }

    handleClose = () => {
        this.setState({ open: false });
    }

    handleOpen = () =>{
        this.setState({ open: true });
    }

    render() {
        const { quote, quoteAuthor } = this.props;
        const { open } = this.state;

        return (
            <div>
                <Button variant='outlined' onClick={this.handleOpen}>Show Quote</Button>
                <Modal
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx= {{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        p: 4,
                        border: '2px solid #000'
                    }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            QUOTE
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {quote}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            -- {quoteAuthor}
                        </Typography>                        
                    </Box>
                </Modal>
            </div>
        );
    }
}