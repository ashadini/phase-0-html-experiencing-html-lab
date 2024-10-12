const assert = require('assert');
const fs = require('fs');

describe('HTML File', function() {
    it('should have a title', function(done) {
        fs.readFile('my_list.html', 'utf8', function(err, data) {
            if (err) throw err;
            assert(data.includes('<title>My Plant List</title>'));
            done();
        });
    });
    // Add more test cases as needed
});
