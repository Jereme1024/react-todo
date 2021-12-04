* Change page
    - State: The state will lose if the dom is left
    - Redux: Keep
    - LocalStorage: Keep

* Share data in multiple users
    - State: No, or maintain a global state
    - Redux: It's global by default
    - LocalStorage: Read once only, not support observer pattern

* Update
    - State: Ask to update the target object only
    - State Object: As above, and perform in O(n)
    - Redux: Update the entire object
    - LocalStorage: do JSON.stringify every time

* Data and action
    - State: Data only
    - Redux: Data and action binding
    - LocalStorage: Data only

* Data life:
    - State: Follow the view
    - Redux: Follow the app
    - LocalStorage: Follow the browser
    - DB: Follow the server