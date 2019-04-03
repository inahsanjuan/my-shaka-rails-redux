class SimsController < ActionController::Base
  layout "sims"

  def index
  	# To skip view rendering, just use layout
  	render html: nil, layout: true
  end
end
