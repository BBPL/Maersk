using System;
using Bogus;

namespace scripts
{
    class Program
    {
        static void Main(string[] args)
        {
            var fakeRole = new Faker<Role>()
                .StrictMode(true)
                .RuleFor(o => o.Id, f => Guid.NewGuid())
                .RuleFor(o => o.Name, f => f.Internet.UserName());

            var fakeUser = new Faker<User>()
                .StrictMode(true)
                .RuleFor(o => o.Id, f => Guid.NewGuid())
                .RuleFor(o => o.Name, f => f.Name.FullName())
                .RuleFor(o => o.Country, f => f.Address.Country())
                .RuleFor(o => o.Mail, f => f.Person.Email)
                .RuleFor(o => o.PhoneNumber, f => f.Person.Phone)
                .RuleFor(o => o.Role, f => fakeRole.Generate());

            var fakeClient = new Faker<Client>()
                .StrictMode(true)
                .RuleFor(o => o.Id, f => Guid.NewGuid())
                .RuleFor(o => o.Name, f => f.Company.CompanyName())
                .RuleFor(o => o.Priority, f => f.PickRandom<Priority>())
            
            var fakeContainer = new Faker<Container>()
                .StrictMode(true)
                .RuleFor(o => o.Id, f => Guid.NewGuid())
                .RuleFor(o => o.Client, f => fakeClient.Generate())
                .RuleFor(o => o.DeparturePlace, f => f.Address.Country())
                .RuleFor(o => o.ArrivalPlace, f => f.Address.Country())
                .RuleFor(o => o.DepartureTime, f => f.Date.Soon())
                .RuleFor(o => o.ArrivalTime, f => f.Date.Future());
            var rnd = new Random();


            var fakeBundle = new Faker<ContainerBundle>()
                .StrictMode(true)
                .RuleFor(o => o.Id, f => Guid.NewGuid())
                .RuleFor(o => o.Client, f => fakeClient.Generate())
                .RuleFor(o => o.Containers, f => fakeContainer.Generate(rnd.Next(4,13)))
                .RuleFor(o => o.Price, f => f.Finance.Amount())
                .RuleFor(o => o.Price, f => f.Finance.Amount());

            var user = fakeUser.Generate();

            // var role = fake.Generate();
            Console.WriteLine($"Hello {user.PhoneNumber}!");
        }
    }
}
