import React, { useState } from "react";
import Router from "next/router";
import { whoAmI } from "../../lib/auth";
import { removeToken } from "../../lib/token";
export default function Dashboard() {
  const [user, setUser] = useState({});
  // Watchers
  React.useEffect(() => {
    const token = window.localStorage.getItem("token") || window.sessionStorage.getItem("token");
    if (!token) {
      redirectToLogin();
    } else {
      (async () => {
        try {
          const data = await whoAmI();
          if (data.error === "Unauthorized") {
            // User is unauthorized and there is no way to support the User, it should be redirected to the Login page and try to logIn again.
            redirectToLogin();
          } else {
            setUser(data.payload);
          }
        } catch (error) {
          // If we receive any error, we should be redirected to the Login page
          redirectToLogin();
        }
      })();
    }
  }, []);

  function redirectToLogin() {
    Router.push("/api/auth/signin");
  }

  function handleLogout(e) {
    e.preventDefault();

    removeToken();
    redirectToLogin();
  }

  if (user.hasOwnProperty("username")) {
    return (
      <>
        <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Welcome {user.username}!
            </a>
            <button
              className="btn btn-info"
              type="button"
              style={{ color: "white", backgroundColor: "#0d6efd" }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </nav>
        <h3>{user.username}'s Profile</h3>
      </>
    );
  }
  return  <div>
  <GridContainer>
    <GridItem xs={12} sm={6} md={3}>
      <Card>
        <CardHeader color="warning" stats icon>
          <CardIcon color="warning">
            <Icon>content_copy</Icon>
          </CardIcon>
          <p className={classes.cardCategory}>Used Space</p>
          <h3 className={classes.cardTitle}>
            49/50 <small>GB</small>
          </h3>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.stats}>
            <Danger>
              <Warning />
            </Danger>
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              Get more space
            </a>
          </div>
        </CardFooter>
      </Card>
    </GridItem>
    <GridItem xs={12} sm={6} md={3}>
      <Card>
        <CardHeader color="dark" stats icon>
          <CardIcon color="dark">
            <Store />
          </CardIcon>
          <p className={classes.cardCategory}>Revenue</p>
          <h3 className={classes.cardTitle}>$34,245</h3>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.stats}>
            <DateRange />
            Last 24 Hours
          </div>
        </CardFooter>
      </Card>
    </GridItem>
    <GridItem xs={12} sm={6} md={3}>
      <Card>
        <CardHeader color="danger" stats icon>
          <CardIcon color="danger">
            <Icon>info_outline</Icon>
          </CardIcon>
          <p className={classes.cardCategory}>Fixed Issues</p>
          <h3 className={classes.cardTitle}>75</h3>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.stats}>
            <LocalOffer />
            Tracked from Github
          </div>
        </CardFooter>
      </Card>
    </GridItem>
    <GridItem xs={12} sm={6} md={3}>
      <Card>
        <CardHeader color="info" stats icon>
          <CardIcon color="info">
            <Accessibility />
          </CardIcon>
          <p className={classes.cardCategory}>Followers</p>
          <h3 className={classes.cardTitle}>+245</h3>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.stats}>
            <Update />
            Just Updated
          </div>
        </CardFooter>
      </Card>
    </GridItem>
  </GridContainer>
  <GridContainer>
    <GridItem xs={12} sm={12} md={4}>
      <Card chart>
        <CardHeader color="success">
          <ChartistGraph
            className="ct-chart"
            data={dailySalesChart.data}
            type="Line"
            options={dailySalesChart.options}
            listener={dailySalesChart.animation}
          />
        </CardHeader>
        <CardBody>
          <h4 className={classes.cardTitle}>Daily Sales</h4>
          <p className={classes.cardCategory}>
            <span className={classes.successText}>
              <ArrowUpward className={classes.upArrowCardCategory} /> 55%
            </span>{" "}
            increase in today sales.
          </p>
        </CardBody>
        <CardFooter chart>
          <div className={classes.stats}>
            <AccessTime /> updated 4 minutes ago
          </div>
        </CardFooter>
      </Card>
    </GridItem>
    <GridItem xs={12} sm={12} md={4}>
      <Card chart>
        <CardHeader color="warning">
          <ChartistGraph
            className="ct-chart"
            data={emailsSubscriptionChart.data}
            type="Bar"
            options={emailsSubscriptionChart.options}
            responsiveOptions={emailsSubscriptionChart.responsiveOptions}
            listener={emailsSubscriptionChart.animation}
          />
        </CardHeader>
        <CardBody>
          <h4 className={classes.cardTitle}>Email Subscriptions</h4>
          <p className={classes.cardCategory}>Last Campaign Performance</p>
        </CardBody>
        <CardFooter chart>
          <div className={classes.stats}>
            <AccessTime /> campaign sent 2 days ago
          </div>
        </CardFooter>
      </Card>
    </GridItem>
    <GridItem xs={12} sm={12} md={4}>
      <Card chart>
        <CardHeader color="dark">
          <ChartistGraph
            className="ct-chart"
            data={completedTasksChart.data}
            type="Line"
            options={completedTasksChart.options}
            listener={completedTasksChart.animation}
          />
        </CardHeader>
        <CardBody>
          <h4 className={classes.cardTitle}>Completed Tasks</h4>
          <p className={classes.cardCategory}>Last Campaign Performance</p>
        </CardBody>
        <CardFooter chart>
          <div className={classes.stats}>
            <AccessTime /> campaign sent 2 days ago
          </div>
        </CardFooter>
      </Card>
    </GridItem>
  </GridContainer>
  <GridContainer>
    <GridItem xs={12} sm={12} md={6}>
      <CustomTabs
        title="Tasks:"
        headerColor="dark"
        tabs={[
          {
            tabName: "Bugs",
            tabIcon: BugReport,
            tabContent: (
              <Tasks
                checkedIndexes={[0, 3]}
                tasksIndexes={[0, 1, 2, 3]}
                tasks={bugs}
              />
            ),
          },
          {
            tabName: "Website",
            tabIcon: Code,
            tabContent: (
              <Tasks
                checkedIndexes={[0]}
                tasksIndexes={[0, 1]}
                tasks={website}
              />
            ),
          },
          {
            tabName: "Server",
            tabIcon: Cloud,
            tabContent: (
              <Tasks
                checkedIndexes={[1]}
                tasksIndexes={[0, 1, 2]}
                tasks={server}
              />
            ),
          },
        ]}
      />
    </GridItem>
    <GridItem xs={12} sm={12} md={6}>
      <Card>
        <CardHeader color="warning">
          <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
          <p className={classes.cardCategoryWhite}>
            New employees on 15th September, 2016
          </p>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="warning"
            tableHead={["ID", "Name", "Salary", "Country"]}
            tableData={[
              ["1", "Dakota Rice", "$36,738", "Niger"],
              ["2", "Minerva Hooper", "$23,789", "Curaçao"],
              ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
              ["4", "Philip Chaney", "$38,735", "Korea, South"],
            ]}
          />
        </CardBody>
      </Card>
    </GridItem>
  </GridContainer>
</div>;
}

// Fojan side notes :
// class A extends React.Component {
//     componentDidUpdate() {
//         React.useEffect(() => {

//         }) // with no second param
//     }
//     componentDidMount() {
//         React.useEffect(() => {

//         }, []) // the Second param should be empty
//     }
//     componentWillReceiveProps() {
//         React.useEffect(() => {

//         }, [props.name]) // The Second param is everything what you want
//     }
//     componentWillUnmount() {
//         React.useEffect(() => {
//             document.querySelectorAll("button").addEventListener("click", (e) => {

//             }, {})
//             return () => {
//                 // This function will be called before raise the Component's Destroy Event
//                 document.querySelectorAll("button").removeEventListener("click", (e) => {

//                 })
//             }
//         })
//     }
//     render() {
//         return (
//             <div>salam</div>
//         )
//     }
// }