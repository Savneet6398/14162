# Welcome

> Your academic assistant.

This is an all-in-one college management app.

[Download now!](https://build.phonegap.com/apps/2640917)

### Used tools:

* Code Editor: [Brackets](http://brackets.io) and [Intel XDK](https://software.intel.com/en-us/intel-xdk)
* Front-end Framework: [Materialize](http://materializecss.com)
* Cross-platform Framework: [Phonegap](http://phonegap.com/)
* Build: [Adobe Phonegap Build](https://build.phonegap.com/)
* Server: [NodeJS](https://nodejs.org/)

***

## Ideas

* Canteen booking
* Exam papers
* Chat room
* All features of [Student Diary](https://play.google.com/store/apps/details?id=com.iitms.sdraisoni)
* Notice board
  * Departmental
  * Events
* Class schedule
* Fees payment
* Salary (for staff)
* Send mail??

## Things to ponder

* Should all logic be in one script or they should be split according to function like, canteen.js, login.js? Likewise for css as well.
* Should mail sending facility be added or not?
* Should personal notes and organizer be added for student like a diary or organizer app?

***

# TODO List

### User interface

* [x] **Navigation bar and Panel** - _needs to be updated with links_
* [x] **Dashboard**
* [x] **Canteen page**
  * [x] **Item order form**
    * [x] **Quantity**
	* [x] ~~Delivery location - if delivery will be given; otherwise not needed~~ - _will be thought out later_
  * [x] **Cart page**
  * [x] ~~Checkout~~ - _will be added later with payment_
* [x] **Paper download page**
* [x] **Student Diary pages**
  * [x] **Personal details**
  * [x] **Attendance**
  * [x] **Marks**
  * [x] ~~Course registration~~ - _requires support from college_
* [x] **Forum**
  * [x] **Chat room selection**
  * [x] **Chat page** - _currently only general chat is available. Private may or may not be added_
  * [x] ~~Chat admin panel~~ - _not required right now. will be added as needed_
* [x] ~~Class Admin panel~~ - _moved to admin tasks on server_
  * [x] ~~Notice board management~~ _moved to admin tasks on server_
* [x] **Login interface**
  * [x] **Login for Student**
  * [x] ~~**Login for staff/admins**~~ _Login would select apropriate permissions based on username_
  * [x] **Password recovery** _Added as a popout menu in login page_
* [x] ~~Account management like password change~~ - _not requred right now_
* [x] ~~Application admin panel~~ _moved to admin tasks on server_
  * [x] ~~Users management~~ _moved to admin tasks on server_
* [x] ~~Canteen Admin Panel~~ _moved to admin tasks on server_
* [x] **404 page**
* [x] ~~Payments using [UPI](https://en.wikipedia.org/wiki/Unified_Payments_Interface) or [PayTM](http://paytm.com)~~ - _will be added after approval from college_
* [x] **IEEE**

### Backend
_this section is to be moved to server repository readme_

* [x] **Create Server Repository**
* [x] **Create Web Server**
* [x] **Database for college info (Student Diary)**
* [x] **College info server**
* [x] **Chat server**
* [x] **Shopping cart manager**
* [x] **Papers directory management service**

### Bugs

* [x] **The categories view on canteen page is not showing complete cards; only image is visible** - _removed swipe to fix it_
