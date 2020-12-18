import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import pageWrapper from './components/HOC/PageWrapper';
import Loader from './components/Loader';

const MainPage = lazy(() => import('./pages/MainPage'));
const NF = lazy(() => import('./pages/NF'));

const App = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route path="/" exact component={pageWrapper(MainPage)} />
      
      <Route component={pageWrapper(NF)} />
    </Switch>
  </Suspense>
);

export default App;
