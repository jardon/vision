Vagrant.configure("2") do |config|
  config.vm.define "db" do |db|
    db.vm.hostname = "db"
    db.vm.provider "docker" do |d|
      d.image = "mongo"
      d.has_ssh = false
      d.remains_running = true
    end
  end

  config.vm.define "web" do |wb|
    wb.vm.hostname = "db"
    wb.vm.synced_folder "./web/vision/", "/app/", create: true
    wb.vm.provider "docker" do |d|
      d.build_dir = "./web"
      d.has_ssh = false
      d.remains_running = true
      d.volumes 
      d.ports = ["3000:3000"]
    end
  end
end
