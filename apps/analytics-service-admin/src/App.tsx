import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AnalyticsDataList } from "./analyticsData/AnalyticsDataList";
import { AnalyticsDataCreate } from "./analyticsData/AnalyticsDataCreate";
import { AnalyticsDataEdit } from "./analyticsData/AnalyticsDataEdit";
import { AnalyticsDataShow } from "./analyticsData/AnalyticsDataShow";
import { UserActivityList } from "./userActivity/UserActivityList";
import { UserActivityCreate } from "./userActivity/UserActivityCreate";
import { UserActivityEdit } from "./userActivity/UserActivityEdit";
import { UserActivityShow } from "./userActivity/UserActivityShow";
import { SystemMetricsList } from "./systemMetrics/SystemMetricsList";
import { SystemMetricsCreate } from "./systemMetrics/SystemMetricsCreate";
import { SystemMetricsEdit } from "./systemMetrics/SystemMetricsEdit";
import { SystemMetricsShow } from "./systemMetrics/SystemMetricsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Analytics Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AnalyticsData"
          list={AnalyticsDataList}
          edit={AnalyticsDataEdit}
          create={AnalyticsDataCreate}
          show={AnalyticsDataShow}
        />
        <Resource
          name="UserActivity"
          list={UserActivityList}
          edit={UserActivityEdit}
          create={UserActivityCreate}
          show={UserActivityShow}
        />
        <Resource
          name="SystemMetrics"
          list={SystemMetricsList}
          edit={SystemMetricsEdit}
          create={SystemMetricsCreate}
          show={SystemMetricsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
