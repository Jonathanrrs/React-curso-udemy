import React from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {

    const user = {
        id: 123,
        name: 'Jonathan',
        email: 'Jona@ucol.mx'
    }
    return (
        <UserContext.Provider value={user}> {/* value es lo que quieres compartir  */}
            <AppRouter />
        </UserContext.Provider>
    )
}
