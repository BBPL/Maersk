using System;
using System.Collections.Generic;

namespace scripts
{

    public class User
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public string Mail { get; set; }
        public string PhoneNumber { get; set; }
        public Role Role { get; set; }
    }

    public class Role
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
    }

    public class Client
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Priority Priority { get; set; }
    }

    public enum Priority
    {
        Low, Medium, High
    }

    public class Container
    {
        public Guid Id { get; set; }
        public Client Client { get; set; }
        public string DeparturePlace { get; set; }
        public DateTime DepartureTime { get; set; }
        public string ArrivalPlace { get; set; }
        public DateTime ArrivalTime { get; set; }
        // public ContainerBundle Bundle { get; set; }
        // public Route Route { get; set; }
    }

    public class ContainerBundle
    {
        public Guid Id { get; set; }
        public Client Client { get; set; }
        public List<Container> Containers { get; set; }
        public decimal Price { get; set; }
        public Route Route { get; set; }
        public User Responsible { get; set; }
    }

    public class Route
    {
        public Guid Id { get; set; }
        public List<Port> Ports { get; set; }
        public decimal Diff { get; set; }
        public decimal EstimatedBunker { get; set; }
        public decimal CurrentBunker { get; set; }
    }

    public class RoutePort {
        public Guid Id { get; set; } 
        public Port Port { get; set; }
        public DateTime ArrivalTime { get; set; }
        public DateTime DepartureTime { get; set; }
        // public int MyProperty { get; set; }
    }

    public class Port
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public bool Failure { get; set; }
    }

}
