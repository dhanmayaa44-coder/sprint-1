# Gym Management System – Database Design

## Users
- _id
- name
- email
- password
- role
- phone
- createdAt

## Members
- _id
- userId
- name
- email
- phone
- address
- membershipPlanId
- trainerId
- membershipStartDate
- membershipEndDate
- status

## Trainers
- _id
- userId
- name
- email
- phone
- specialization
- createdAt

## MembershipPlans
- _id
- planName
- duration
- price
- description
- status

## Attendance
- _id
- memberId
- date
- checkInTime
- status

## Payments
- _id
- memberId
- membershipPlanId
- amount
- paymentDate
- paymentMethod
- status
- renewalDate