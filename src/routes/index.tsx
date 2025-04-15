import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Contact } from '../pages/Contact';
import { Dashboard } from '../pages/Dashboard';
import { Studies } from '../pages/Studies';
import { Courses } from '../pages/Courses';
import { Experience } from '../pages/Experience';
import { Layout } from '../pages/layout/Layout';
import { NotFound } from '../pages/NotFound';

export default function IndexRoute() {


    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout /> }>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/studies' element={<Studies />} />
                    <Route path='/courses' element={<Courses />} />
                    <Route path='/experience' element={<Experience />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}