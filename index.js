const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Booking {
    _id: ID!
    from: String!
    to: String!
    depart:String!
    name:String!
    cellphone:String!
    segment:String!
    created_at:String!
    creator: User!
}

type Event {
  _id: ID!
  title: String!
  description: String!
  price: Float!
  date: String!
  creator: User!
}

type User {
  _id: ID!
  email: String!
  password: String,
  type:String,
  createdEvents: [Event!]
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!,
  type:String!
}

type Segment {
  _id: ID!
  name: String!
  passanger_capacity: String!
  Order: Float!
  date: String!
  creator: User!
}

type Attribute {
  _id: ID!
  name: String!
  Order: Float!
  date: String!
  creator: User!
}

type Flatefare {
  _id: ID!
  name: String!
  date: String!
  creator: User!
  details:[Flatefaredetail!]
}

type Flatefaredetail {
  _id: ID!
  startday: String!
  endday: String!
  starthoure: String!
  endhoure: String!
  pickup: String!
  drop: String!
  spprice: [String!]
  cusprice: [String!]
  rate:String!
  active: String!
  faltefare: String!
}


type Meteredfare {
  _id: ID!
  name: String!
  startday: String!
  endday: String!
  starthoure: String!
  endhoure: String!
  active:String!
  creator: User!
  distancebased:[Meteredfarebased!]
  timebased:[Meteredfarebased!]
}


type Meteredfarebased {
  _id: ID!
  meteredfare: String!
  distance: String!
  startup: String!
  spprice: [String]!
  cusprice: [String!]
}

type Geofencing {
  _id: ID!
  country: String!
  city: String!
  area: String
  poi:String
  geofencing:String!
  title:String!
  creator: User!
}


type AttributeGroup
{
  _id: ID!
  name: String!
  spprice: [String!]
  cusprice: [String!]
  active:String!
  creator: User!
}

type Pricelist{
  _id:ID!
  name:String!
  flatefare:[String!]
  meteredfare:[String!]
  attributegroup:[String!]
  creator:User!
}

type Spmanagement{
  _id:ID!
  name:String!
  dispatchMethod:String!
  active:String!
  allocationtime:String!
  cancelationtime:String!
  pricelist:String!
  pricemethod:String!
  coveredarea:[String!]
  segments:[String!]
  attributes:[String!]
  creator:User!
}


input EventInput {
  title: String!
  description: String!
  price: Float!
  date: String!
}

input SegmentInput {
  id: String!
  name: String!
  passanger_capacity: String!
  Order: Float!
}

input AttributeInput {
  id: String!
  name: String!
  Order: Float!
}

input GeofencingInput {
  id:String!
  country: String!
  city: String!
  area: String
  poi:String
  geofencing:String!
  title:String!
}

input FlatefareInput {
  id: String!
  name: String!
}

input MeteredfareInput {
  id: ID!
  name: String!
  startday: String!
  endday: String!
  starthoure: String!
  endhoure: String!
  active:String!
  distancebased:[String!]
  timebased:[String!]
}

input MeteredfareTDbasedInput {
  _id: String!
  meteredfare: String!
  distance: String!
  startup: String!
  spprice: [String!]
  cusprice: [String!]
  type:String!
}

input FlatefaredetailInput {
  _id: ID!
  startday: String!
  endday: String!
  starthoure: String!
  endhoure: String!
  pickup: String!
  drop: String!
  spprice: [String!]
  cusprice: [String!]
  rate:String!
  active: String!
  faltefare: String!
}


input UserInput {
  _id:ID!
  email: String!
  password: String!
  type:String!,
}


input AttributeGroupInput
{
  _id: ID!
  name: String!
  spprice: [String!]
  cusprice: [String!]
  active:String!
}

input PricelistInput{
  _id:ID!,
  name:String!
  flatefare:[String!]
  meteredfare:[String!]
  attributegroup:[String!]
}

input SpmanagementInput{
  _id:ID!
  name:String!
  dispatchMethod:String!
  active:String!
  allocationtime:String!
  cancelationtime:String!
  pricelist:String!
  pricemethod:String!
  coveredarea:[String!]
  segments:[String!]
  attributes:[String!]
}

input BookingInput {
  _id: ID!
  from: String!
  to: String!
  depart:String!
  name:String!
  cellphone:String!,
  segment:String!
}


input SearchBookingInput {
  _id: ID
  name:String
  fromdate: String
  todate: String
  cellphone:String
}


type RootQuery {
    events: [Event!]!


    Bookings: [Booking!]!
    Booking(bookingId:String!): Booking!


    login(email: String!, password: String!): AuthData!
    Users:[User!]!
    User(UserId:String! ):User!


    segments: [Segment!]!
    segment(segmentId:String! ):Segment!

    Attributes: [Attribute!]!
    Attribute(attributeId:String! ):Attribute!

    Geofencings: [Geofencing!]!
    Geofencing(geofencingId:String! ):Geofencing!

    Flatefares: [Flatefare!]!
    Flatefare(flatefareId:String! ):Flatefare!

    Flatefaredetail(flatefareId:String!,recordId:String!):Flatefaredetail!


    Meteredfares: [Meteredfare!]!
    Meteredfare(MeteredfareId:String! ):Meteredfare!

    Attributegroups: [AttributeGroup!]!
    Attributegroup(AttributegroupId:String! ):AttributeGroup!

    Pricelists: [Pricelist!]!
    Pricelist(pricelistId:String! ):Pricelist!

    Spmanagements: [Spmanagement!]!
    Spmanagement(spmanagementId:String! ):Spmanagement!
  }

type RootMutation {
    createEvent(eventInput: EventInput): Event
    
    createUser(userInput: UserInput): User
    destroyUser(recordID: String!): User!
    updateUser(userInput: UserInput): [User!]!

    bookEvent(eventId: ID!): Booking!
    cancelBooking(bookingId: ID!): Event!
    createSegment(segmentInput: SegmentInput): Segment
    destroySegment(recordID: String!): Segment!
    updateSegment(segmentInput: SegmentInput): [Segment!]!

    createAttribute(attributeInput: AttributeInput): Segment
    destroyAttribute(recordID: String!): Segment!
    updateAttribute(attributeInput: AttributeInput): [Segment!]!

    createGeofencing(geofencingInput: GeofencingInput): Geofencing
    destroyGeofencing(recordID: String!): Geofencing!
    updateGeofencing(geofencingInput: GeofencingInput): [Geofencing!]!

    createFlatefare(flatefareInput: FlatefareInput): Flatefare!
    destroyFlatefare(recordID: String!): Flatefare!
    updateFlatefare(flatefareInput: FlatefareInput): [Flatefare!]!


    updateFlatefaredetail(FlatefaredetailInput: FlatefaredetailInput): [Flatefare!]!
    createFlatefaredetail(FlatefaredetailInput: FlatefaredetailInput): Flatefaredetail
    destroyFlatefaredetail(recordID: String!,flatefare:String!): Flatefaredetail!

    createMeteredfare(MeteredfareInput: MeteredfareInput): Meteredfare!
    destroyMeteredfare(recordID: String!): Meteredfare!
    updateMeteredfare(MeteredfareInput: MeteredfareInput): [Meteredfare!]!

    addMeteredfaredetail(MeteredfareTDbasedInput:MeteredfareTDbasedInput): Meteredfarebased!
    deleteMeteredfaredetail(meteredfare: String!,type: String!,index:String!): Meteredfare!

    createAttributeGroup(AttributeGroupInput: AttributeGroupInput): AttributeGroup!
    destroyAttributeGroup(recordID: String!): AttributeGroup!
    updateAttributeGroup(AttributeGroupInput: AttributeGroupInput): [AttributeGroup!]!

    createPricelist(PricelistInput: PricelistInput): Pricelist!
    destroyPricelist(recordID: String!): Pricelist!
    updatePricelist(PricelistInput: PricelistInput): [Pricelist!]!

    createSpmanagement(SpmanagementInput: SpmanagementInput): Spmanagement!
    destroySpmanagement(recordID: String!): Spmanagement!
    updateSpmanagement(SpmanagementInput: SpmanagementInput): [Spmanagement!]!

    FetchByPageNumber(pageNumber: String!):[Booking!]!
    createBooking(BookingInput: BookingInput): Booking!
    destroyBooking(recordID: String!): Booking!
    updateBooking(BookingInput: BookingInput): [Booking!]!
    SearchBooking(SearchBookingInput:SearchBookingInput):[Booking!]!
    BookingByPage(BookingInput: BookingInput):[Booking!]!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
