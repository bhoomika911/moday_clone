1. Navigate to new screen :

  this.props.history.push('/Page2')


2.Pop to old screen

  this.props.history.goBack()


3.Pass Data from one screen to other

this.props.history.push(
  '/Page2',
  {
    dataFromHome : "Bhumi"
  });

-Access value in next page by => this.props.location.state.dataFromHome;


4.Pass data back to backword screen
