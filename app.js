const user = {
    email: 'joe@gmail.com'
};


try {
    // Produce a reference error
    // myFunction()
    //  null.myFunction();

    // Will produce a URIError
    // decodeURIComponent('%');

    if (!user.name) {
        // throw 'User has no name';
        throw new SyntaxError('User has no name');
    }




} catch (e) {
    console.log(e);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof ReferenceError);
    // console.log(e instanceof TypeError);

    // console.log(e);

} finally {
    console.log('Finally runs reguardless of result');

}

console.log('Program continues.....');